import './style.css'

console.log("Ready bromine")

//Add else error logs on all the if(body/content) s

//SHIFT OPTION F
/*
picture usage

import Icon from './icon.png';

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

*/

//Fucntion to create the header info for website, other functions should not clear this
function loadHeader() {
    const body = document.querySelector("body");
    if (body) {
        const head = document.createElement("header");

        const top = document.createElement("div");
        top.className = "top";

        const steve = document.createElement("button");
        steve.textContent = "Steve's Bar and Grill";
        steve.className = "steve";
        steve.onclick = loadAbout
        top.append(steve);

        const acc = document.createElement("div");
        acc.className = "account-buttons";
        const signin = document.createElement("button");
        signin.textContent = "Sign In";
        const register = document.createElement("button");
        register.textContent = "Register";

        acc.append(signin);
        acc.append(register);
        top.append(acc);

        const nav = document.createElement("nav");
        const navItems = ["Locations", "Menu", "Catering", "Rewards"];
        const navFuncs = [loadLocations, loadMenu, loadCatering, loadRewards]

        for (let i = 0; i < navItems.length; i++) {
            const but = document.createElement("button");
            but.textContent = navItems[i];
            but.onclick = navFuncs[i]
            nav.append(but);
        }

        head.append(top);
        head.append(nav);
        body.append(head);

        //console.log(head);
    }
}



function loadAbout() {
    const body = document.querySelector("body");
    if (body) {
        let content = document.getElementById("content");
        //Clear anything in current div
        if (content) {
            content.innerHTML = "";
        } else {
            content = document.createElement("div");
            content.id = "content";
            body.append(content)
        }

        const container = document.createElement("div");
        container.className = "about-container";

        const about = document.createElement("div");
        about.className = "section about";

        const title = document.createElement("div");
        title.className = "section title";
        title.textContent = "About Steve's"

        const text = document.createElement("div");
        text.className = "section-text";

        const par0 = "Steve's Bar and Grill is a ficitonal restaurant created during the completion of The Odin Project to demonstrate/enforce web development skills. In the interest of time management, please enjoy the ChatGPT's description of the wonderful Steve's Bar and Grill."
        const par1 = "Founded in the vibrant heart of Las Vegas, Steve's Bar and Grill has grown from a single, cozy establishment to a beloved chain with locations spanning the beautiful West Coast. Our journey began in 2024 when Colton Morley, a passionate foodie with a dream, opened the doors to a place where great food, good times, and a warm, welcoming atmosphere come together."
        const par2 = "At Steve's Bar and Grill, we believe that every meal should be a memorable experience. Our menu is a celebration of classic American cuisine with a modern twist, featuring everything from mouthwatering burgers and sizzling steaks to fresh salads and innovative appetizers. Whether you're here for a casual lunch, a family dinner, or a night out with friends, we have something to satisfy every craving."
        const par3 = "Over the years, we've expanded our footprint to several key cities across the West Coast, including Los Angeles, San Francisco, Seattle, and Portland. Each location maintains the unique charm and personality that Steve envisioned, while also embracing the local culture and community.  Join us at Steve's Bar and Grill, where tradition meets innovation, and every guest is treated like family. We look forward to serving you and creating unforgettable memories together."
        const pars = [par0, par1, par2, par3]

        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            div.className = "section content";
            div.textContent = pars[i]
            text.append(div)
        }

        about.append(title)
        about.append(text)
        container.append(about)
        content.append(container)
        // Have the html for image addition written in HTML HARCODE file

    }
}

//Need to make into flex or grid cards, add pics of each city?? 1 column lots of rows spanning whole screen w good padding
//Function to load locations
function loadLocations() {
    const content = document.getElementById("content");
    if (content) {
        //Clear anything in current div
        content.innerHTML = "";
        const locs = ["Las Vegas, NV - 123 Fremont Street", "Los Angeles, CA - 456 Sunset Boulevard", "Reno, NV - 707 Riverwalk District", "Portland, OR - 202 Pearl District", "Seattle, WA - 303 Pike Place", "Eugene, OR - 606 Downtown"]
        const cont = document.createElement("div")
        cont.className = "locations-container"

        const title = document.createElement("div")
        title.className = "section title"
        cont.append(title)

        for (let i = 0; i < 6; i++) {
            const card = document.createElement("div")
            card.className = "location-card"

            const txt = document.createElement("div")
            txt.textContent = locs[i]
            card.append(txt)
            cont.append(card)
        }
        content.append(cont)
    }
}

function loadMenu() {
    const content = document.getElementById("content");
    if (content) {
        //Clear anything in current div
        content.innerHTML = "";
        //var second = document.querySelector(".content a:nth-child(2)")
        const cont = document.createElement("div");
        cont.className = "menu-container";
        const classnames = ["section title", "starters", "salads", "burgers", "entrees", "deserts"];
        for (let i = 0; i < 6; i++) {
            const d = document.createElement("div")
            d.className = classnames[i];
            cont.append(d);
        }
        content.append(cont);
        let sections = cont.querySelectorAll(":scope > div");
        sections[0].textContent = "Menu, *Add autoscroll buttons";
        
        const blankMenuItem = document.createElement("div");
        blankMenuItem.className = "menu-item"
        const line = document.createElement("div");
        blankMenuItem.append(line.cloneNode(true));
        blankMenuItem.append(line.cloneNode(true))

        const secTitle = document.createElement("div");
        secTitle.textContent = "Starters"
        sections[1].append(secTitle);
        
        let m1 = blankMenuItem.cloneNode(true);
        m1.getElementsByTagName("div")[0].textContent = "Steve's Famous Nachos";
        m1.getElementsByTagName("div")[1].textContent = "Crispy tortilla chips topped with melted cheese, jalapeños, black beans, pico de gallo, and sourcream.";
        sections[1].append(m1);

        m1 = blankMenuItem.cloneNode(true);
        m1.getElementsByTagName("div")[0].textContent = "Buffalo Wings";
        m1.getElementsByTagName("div")[1].textContent = "A dozen spicy buffalo wings served with celery sticks and blue cheese or ranch dressing.";
        sections[1].append(m1);

        m1 = blankMenuItem.cloneNode(true);
        m1.getElementsByTagName("div")[0].textContent = "Spinach Artichoke Dip";
        m1.getElementsByTagName("div")[1].textContent = "Creamy spinach and artichoke dip served with warm pita bread and tortilla chips.";
        sections[1].append(m1);

        m1 = blankMenuItem.cloneNode(true);
        m1.getElementsByTagName("div")[0].textContent = "Loaded Potato Skins";
        m1.getElementsByTagName("div")[1].textContent = "Potato skins loaded with cheddar cheese, bacon, green onions, and sour cream.";
        sections[1].append(m1);

        console.log(content);
    }
}

    function loadCatering() {
        return
    }

    function loadRewards() {
        return
    }


    loadHeader()
    loadAbout()
//loadLocations()
