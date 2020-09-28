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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let nav = document.querySelector('nav');
let navItems = nav.querySelectorAll('a');

navItems.forEach((navItem, index) => {
  navItem.innerText = siteContent['nav'][`nav-item-${index + 1}`];
})

let h1 = document.querySelector('h1');

h1.innerHTML = siteContent["cta"]["h1"].slice(0,3) + "<br>" + siteContent["cta"]["h1"].slice(4,6) + "<br>" + siteContent["cta"]["h1"].slice(7);

document.querySelector('button').innerText = siteContent["cta"]["button"];

document.getElementById('cta-img').src = siteContent["cta"]["img-src"];

// main-content

let textContents = document.querySelectorAll('.text-content');

textContents[0].querySelector('h4').innerText = siteContent["main-content"]["features-h4"];

textContents[0].querySelector('p').innerText = siteContent["main-content"]["features-content"];

textContents[1].querySelector('h4').innerText = siteContent["main-content"]["about-h4"];

textContents[1].querySelector('p').innerText = siteContent["main-content"]["about-content"];

textContents[2].querySelector('h4').innerText = siteContent["main-content"]["services-h4"];

textContents[2].querySelector('p').innerText = siteContent["main-content"]["services-content"];

textContents[3].querySelector('h4').innerText = siteContent["main-content"]["product-h4"];

textContents[3].querySelector('p').innerText = siteContent["main-content"]["product-content"];

textContents[4].querySelector('h4').innerText = siteContent["main-content"]["vision-h4"];

textContents[4].querySelector('p').innerText = siteContent["main-content"]["vision-content"];

// middle-img;

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

// contact

let contact = document.querySelector('.contact');

contact.querySelector('h4').innerText = siteContent["contact"]["contact-h4"];

contact.querySelectorAll('p')[0].innerHTML = siteContent["contact"]["address"].slice(0, 18) + '<br>' + siteContent["contact"]["address"].slice(19);

contact.querySelectorAll('p')[1].innerText = siteContent["contact"]["phone"];
contact.querySelectorAll('p')[2].innerText = siteContent["contact"]["email"];

// footer

let footer = document.querySelector('footer');
footer.querySelector('p').innerHTML = siteContent["footer"]["copyright"];