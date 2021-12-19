class navbar
{
    constructor(opList, inbgColor="#0000003f")
    {
        this.bgColor = inbgColor
        this.code = ""
    }
    
    loadOptions(optList)
    {
        for (let index = 0; index < optList.length; index++) {
            this.code += `<span class="vjs-nav-opt">${optList[index]}</span>\n`
        }

    }
    stacker() // injects html code
    {
        this.navBox = document.createElement("header")
        this.navBox.id = "navbar-js"
        this.navBox.innerHTML = this.code
    }
    prepender() // prepends this to the body (1st element)
    {
        document.body.prepend(this.navBox)
    }

    appender() // appends this to the body (last element)
    {
        document.body.appendChild(this.navBox)
    }

    stylizer(width="100%", height="10Vh", bgColor=this.bgColor, textColor="wheat")
    {
        // Globally the box
        let box = this.navBox.style
        box.width = width
        box.height = height
        box.backgroundColor = bgColor
        box.color = textColor
    }

    sidebarHS()
    {
        this.SHbtn = document.createElement("div")
        this.SHbtnCode = 
        `
        <div class="btn-show-sidebar-item"></div>
        <div class="btn-show-sidebar-item"></div>
        <div class="btn-show-sidebar-item"></div>
        `
        this.SHbtn.innerHTML = this.SHbtnCode
        this.SHbtn.id = "show-sidebar"
        this.navBox.prepend(this.SHbtn)

    }

    hideNshow()
    {
        // Hide or show sidebar on click
        document.getElementById("show-sidebar").addEventListener("click", () => {
            
            let displayMenu = document.getElementById("sidebar")
            var classGroup = displayMenu.classList
            let rotateBtn = document.getElementById("show-sidebar")

            if (classGroup[classGroup.length -1] === "visible") {
                displayMenu.classList.remove("visible")
                rotateBtn.classList.remove("clicked")
            }
            else {
            displayMenu.classList.add("visible")
            rotateBtn.classList.add("clicked")
            }
            if (classGroup[classGroup.length -1] === "visible"){
                document.querySelectorAll(".sidebar-opt").forEach(item => {
                    item.addEventListener("click", () => {
                        rotateBtn.classList.remove("clicked")
                        displayMenu.classList.remove("visible")
                    })
                })
            }
        })
    }

    autoBar(mode="prepend") // uses all the functions defined up there
    {
        this.stacker()
        if (mode === "append") {this.appender()}
        else {this.prepender()}
        this.stylizer()
        this.sidebarHS()
        this.hideNshow()
    }
}

class sideBar
{
    constructor(side="right")
    {
        this.side = side
        this.sideBox = document.createElement("div")
        this.sideBoxCode = 
        `<div>
            <div id="sidebar-head">
                <span id="close">X</span>
            </div>
        </div>
        `
        this.sideBox.id = "sidebar"
    }


    stylizer(bgColor="#00100079", width="20%", height="100%")
    {
        let stylize = this.sideBox.style
        stylize.backgroundColor = bgColor
        if (this.side === "left") {this.sideBox.classList.add("sidebar-left")}
        else if (this.side === "right") {this.sideBox.classList.add("sidebar-right")}
        stylize.width = width
        stylize.height = height
    }

    addOptions(optT, optL) // flexible number of optionss
    {
        for (let index = 0; index < optL.length; index++) {
            let opt = document.createElement("a")
            opt.target = "_blank"
            opt.innerHTML = optT[index]
            opt.href = optL[index]
            opt.classList.add("sidebar-opt")
            this.sideBox.appendChild(opt)
        }
    }

    appendSidebar() // Make it visible
    {
        this.stylizer()
        document.body.appendChild(this.sideBox)
    }
}

export {navbar, sideBar}