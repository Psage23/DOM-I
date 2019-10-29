const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let Links = document.getElementsByTagName("a");
Links[0].textContent = siteContent.nav["nav-item-1"];
Links[1].textContent = siteContent.nav["nav-item-2"];
Links[2].textContent = siteContent.nav["nav-item-3"];
Links[3].textContent = siteContent.nav["nav-item-4"];
Links[4].textContent = siteContent.nav["nav-item-5"];
Links[5].textContent = siteContent.nav["nav-item-6"];
console.log(Links);

let textCta = document.querySelector(".cta-text h1");
textCta.textContent = siteContent["cta"]["h1"]; 
console.log(textCta);

let buttonCta = document.querySelector("button");
buttonCta.textContent = siteContent["cta"]["button"]; 
console.log(buttonCta);


let imgCta = document.getElementById("cta-img");
imgCta.setAttribute("src", siteContent["cta"]["img-src"]);
console.log(imgCta);

let topTitle = document.querySelector(".main-content").querySelectorAll("h4");
topTitle[0].textContent = siteContent["main-content"]["features-h4"];
topTitle[1].textContent = siteContent["main-content"]["about-h4"];
topTitle[2].textContent = siteContent["main-content"]["services-h4"];
topTitle[3].textContent = siteContent["main-content"]["product-h4"];
topTitle[4].textContent = siteContent["main-content"]["vision-h4"];
console.log(topTitle);

let topParagraph = document.querySelector(".main-content").querySelectorAll("p");
topParagraph[0].textContent = siteContent["main-content"]["features-content"];
topParagraph[1].textContent = siteContent["main-content"]["about-content"];
topParagraph[2].textContent = siteContent["main-content"]["services-content"];
topParagraph[3].textContent = siteContent["main-content"]["product-content"];
topParagraph[4].textContent = siteContent["main-content"]["vision-content"];
console.log(topParagraph);

let imgMid = document.getElementById("middle-img");
imgMid.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
console.log(imgMid);

let contactTitle = document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
console.log(contactTitle);

let contactParagraph = document.querySelector(".contact").querySelectorAll("p");
contactParagraph[0].textContent = siteContent["contact"]["address"];
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];
console.log(contactParagraph);

let bottom = document.querySelector("footer p").textContent = siteContent["footer"]["copyright"]
