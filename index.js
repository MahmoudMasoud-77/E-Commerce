/* ****************** nav ************************ */
 burger = document.querySelector('.burger i');
 const nav = document.querySelector('.nav');

 function toggleNav() {
   burger.classList.toggle('fa-bars');
   burger.classList.toggle('fa-times');
   nav.classList.toggle('nav-active');
}

  burger.addEventListener('click', function() {toggleNav();});

/* ******************** slider *************************** */

function supernova_slider() {
    let nextBtn = document.querySelector(".next"),
        prevBtn = document.querySelector(".prev"),
        slide = document.querySelectorAll(".block"),
        caption = document.querySelectorAll('.caption'),
        i = 0;

    let removeClass =(index)=>{
      slide[index].classList.remove("activeGallery");
      caption[index].classList.remove("activeGallery");
    }
    let activeClass =(index)=>{
      slide[index].classList.add("activeGallery");
      caption[index].classList.add("activeGallery");
    }
    /* prev image */
    prevBtn.onclick = (event) => {
        event.preventDefault();

        removeClass(i);
        i--;
        if (i < 0) i = slide.length - 1;
        activeClass(i);
    };
    /* next image */
    nextBtn.onclick = (event) => {
        event.preventDefault();
       
        removeClass(i);
        i++;
        if (i >= slide.length) i = 0;
        activeClass(i);
    };

    setInterval(slider_callback, 4000);

    function slider_callback() {
        nextBtn.click();
    }
}
supernova_slider();

/* ********************************* Filter prod ************************************** */

/* async function fetchProduct(){
  try {
    const fetchPromiseId = await fetch(``)
    const response = await fetchPromiseId.json();
    let data = await response;
    return data;

  } catch (error) {
    console.log(error);
  }
} */

let products = {
  data: [
    {
      productName: "Phone opp",
      category: "Phones",
      price: "30",
      image: "/assets/products/phone/ph1.jpg",
    },
    {
      productName: "Makeups 1",
      category: "Makeups",
      price: "49",
      image: "/assets/products/makeups/mak1.jpg",
    },
    {
      productName: "tesla",
      category: "Cars",
      price: "1000",
      image: "/assets/products/car/car2.jpg",
    },
    {
      productName: "Phones app",
      category: "Phones",
      price: "29",
      image: "/assets/products/phone/ph2.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Clothes",
      price: "129",
      image: "/assets/products/clothes/cloth3.jpg",
    },
    {
      productName: "Makeups Pink 2",
      category: "Makeups",
      price: "89",
      image: "/assets/products/makeups/mak2.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Clothes",
      price: "189",
      image: "/assets/products/clothes/cloth2.jpg",
    },
    {
      productName: " Makeups 3",
      category: "Makeups",
      price: "49",
      image: "/assets/products/makeups/mak3.jpg",
    },
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container info about product
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
  //btn add
  let btnAdd = document.createElement("button");
  btnAdd.classList.add("btnAdd");
  btnAdd.innerText = "Add";
  container.appendChild(btnAdd);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Initially display all products
window.onload = () => {
  filterProduct("all");
};


/* *********************************** footer **************************************** */

document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let ratio = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > ratio) {
    //show button
    scrollToTopBtn.classList.add("showScrollBtn")
  } else {
    //hide button
    scrollToTopBtn.classList.remove("showScrollBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}