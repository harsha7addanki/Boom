class BoomTemplate {
    constructor(t) {
        for (var e = document.getElementsByTagName("boom-template"), n = 0; n < e.length; n++){
            e[n].getAttribute("boom-tid") == t && ((this.templateDoc = new DOMParser().parseFromString(e[n].innerHTML, "text/html")), (this.template = e[n]));
        }
        for (var m = this.template.getElementsByTagName("boom-for"), o = (m[o].innerHTML, 0); o < m.length; o++) {
          for (var r = 0; r < m[o].getAttribute("boom-ittr"); r++) {
            m[o].innerHTML = m[o].innerHTML + ihtml;
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
