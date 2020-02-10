const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// header nav

let myNavLength = Object.keys(siteContent.nav);

for(let i=1; i < myNavLength.length; i++) {
  let navBar = document.querySelector(`nav a:nth-child(${i})`);
  navBar.textContent = siteContent['nav'][`nav-item-${[i]}`];
}

const links = document.getElementsByTagName('a');

Array.from(links).forEach(e=> {
  e.style.color = 'green';
})


// New nav items
const navAdd = document.querySelector('nav');

const a = document.createElement('a');
const link = document.createTextNode("New Item");

a.appendChild(link);
a.title="New Item 1";
a.href="#";
a.style.color = "green"

navAdd.append(a);

const a2 = document.createElement('a');
const link2 = document.createTextNode("Newer Item");
a2.appendChild(link2);
a2.title="New Item 2";
a2.href="#";
a2.style.color = "green"

navAdd.prepend(a2);

// section cta-text
let ctaH1 = document.querySelector('h1');
ctaH1.innerHTML = siteContent["cta"]["h1"];

document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];

// section cta-img
document.querySelector('#cta-img').setAttribute('src', siteContent["cta"]["img-src"]);


// section main-content
let myH4 = document.querySelectorAll('.text-content h4');
myH4[0].textContent = siteContent["main-content"]["features-h4"];
myH4[1].textContent = siteContent["main-content"]["about-h4"];
myH4[2].textContent = siteContent["main-content"]["services-h4"];
myH4[3].textContent = siteContent["main-content"]["product-h4"];
myH4[4].textContent = siteContent["main-content"]["vision-h4"];

let myP = document.querySelectorAll('.text-content p');
myP[0].textContent = siteContent["main-content"]["features-content"];
myP[1].textContent = siteContent["main-content"]["about-content"];
myP[2].textContent = siteContent["main-content"]["services-content"];
myP[3].textContent = siteContent["main-content"]["product-content"];
myP[4].textContent = siteContent["main-content"]["vision-content"];

// section middle-img
document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// section contact
let myContactH4 = document.querySelector('.contact h4');
let myContactP = document.querySelectorAll('.contact p');

myContactH4.textContent = siteContent["contact"]["contact-h4"];
myContactP[0].innerHTML = siteContent["contact"]["address"];
myContactP[1].textContent = siteContent["contact"]["phone"];
myContactP[2].textContent = siteContent["contact"]["email"];

// footer
document.querySelector('footer').textContent = siteContent.footer.copyright;