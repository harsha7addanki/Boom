// if we use web components we have to change api so this class is now Legacy
class LegacyBoomTemplate {
    constructor(t) {
        for (var e = document.getElementsByTagName("boom-template"), n = 0; n < e.length; n++){
            e[n].getAttribute("boom-tid") == t && ((this.templateDoc = new DOMParser().parseFromString(e[n].innerHTML, "text/html")), (this.template = e[n]));
        }
        for (var m = this.template.getElementsByTagName("boom-for"), o = (m[o].innerHTML, 0); o < m.length; o++) {
          for (var r = 0; r < m[o].getAttribute("boom-ittr"); r++) {
            m[o].innerHTML += ihtml;
          }
        }
    }
    bind(t, e) {
        for (var n = this.templateDoc.getElementsByTagName("boom-bind"), m = 0; m < n.length; m++) {
          n[m].getAttribute("boom-name") == t && (n[m].innerHTML = e);
        }
        this.template.innerHTML = this.templateDoc.documentElement.innerHTML;
    }
}

/*
 * YAY UNTESTED CODE
*/

class BoomBindElement extends HTMLElement {
  constructor(){
    super()
  }

  connectedCallback(){
    this.attachShadow({mode:"open"});
    const wrapper = document.createElement("div")
    if(this.hasAttribute("bname")){
      // avoid users from knowing the raw id (Could be used for exploit). Keep it as class becauce what if you want to mass change something?
      wrapper.setAttribute("class",`boom-${Buffer.from(this.getAttribute("bname"), 'utf8').toString('base64')}`)
    }else{
      throw "No BName"
    }
    this.shadowRoot.append(wrapper)
  }
}

customElements.define("boom-bind", BoomBindElement);