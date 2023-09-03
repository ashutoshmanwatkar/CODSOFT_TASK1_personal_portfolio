
//------------------------------Text animation using typejs-------------------------
var typed = new Typed('#element', {
    strings: ['Web developer.', 'Web designer.', 'Embedded engineer.', 'Aeromodelling enthusiast.', 'Freelancer.'],
    typeSpeed: 50,
});

//----------------------------hamburger navigation bar-------------------------
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('nav-toggle');
})
const header = document.querySelector('header');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 5) {
        // header.style.height = '70px';
        header.style.backgroundColor = '#rgba(0, 0, 104)';
    } else {
        // header.style.height = '100px';
        header.style.backgroundColor = 'rgba(0, 0, 104)';
    }
}

// -------------------- skills, experience and education part in about section ------------------

var tabmenus = document.getElementsByClassName("tab-menus");
var profilecontents = document.getElementsByClassName("profile-contents");

function opentab(event, tabname) {
    for (tabmenu of tabmenus) {
        tabmenu.classList.remove("active-link");
    }
    for (profilecontent of profilecontents) {
        profilecontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ------------------------------------google sheets for contact form------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzAZTW-VC3CR2OTDWt-RNK1xxWn1Y-108cwPuivam9PKnIT3t1JYkfcmGS8ucqac6L6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your message is received successfully.";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 2000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})