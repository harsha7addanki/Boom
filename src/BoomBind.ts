class BoomBindElement extends HTMLElement {
    constructor(){
        super()
    }

    connectedCallback(){
        this.attachShadow({mode:"open"});
        const wrapper = document.createElement("div")
        if(this.hasAttribute("bname")){
        // avoid users from knowing the raw id (Could be used for exploit). Keep it as class becauce what if you want to mass change something?
        wrapper.setAttribute("class",`boom-${this.getAttribute("bname")}`)
        }else{
        throw "No BName"
        }
        this.shadowRoot.append(wrapper)
    }
}

class BoomBind {
    bname:string
    constructor(bname:string){
        this.bname = `boom-${bname}`
    }

    bind(text:string){
        let elements = document.getElementsByClassName(this.bname)
        for(const element of Array.from(elements)){
            element.innerHTML = text
        }
    }
}

export { BoomBindElement, BoomBind, }  