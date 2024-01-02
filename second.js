const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-navigation');
const toggle = document.getElementById('togglebtn');


menu.addEventListener("click", function() {
  mobileNav.classList.toggle("active");
  toggle.classList.toggle("active");
  logo.classList.toggle('logo-active');
})


/*topbar*/

const topbar = document.querySelector('.topbar');




window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 40) {
    topbar.classList.add('active-topbar');
  }
  else { topbar.classList.remove('active-topbar')
}
})

/*scroll-links*/

const scrollLinks = document.querySelectorAll('.scroll-links');
const logo = document.querySelector('.logo');
scrollLinks.forEach(function (links) {
  links.addEventListener('click', function () {
    mobileNav.classList.remove("active");
    toggle.classList.remove("active");
    logo.classList.remove('logo-active');
  })
})


/*menu script*/

const menus = [
  {
  id: 1,
  title: 'Buttermilk pancakes',
  category: 'Breakfast',
  img: './monika-grabkowska-jsgJtBOR6jY-unsplash_454747_CS-4070.jpg',
  price: '$12',
  info: 'Delicate buttermilk pancakes, golden and fluffy, a blissful bite'
},

{
  id: 2,
  title: 'Smoothie',
  category: 'Drinks',
  img: './lyfefuel-sq5NM8l_bI0-unsplash_700135_CS-6525.jpg',
  price: '$10',
  info: 'soothing taste of our power packed smoothie, blends from nutritous fruits, nuts and cream, satisfaction with each sip'
},

{
  id: 3,
  title: 'Noodles',
  category: 'Lunch',
  img: './ikhsan-baihaqi-pbc2wXbQYpI-unsplash_686852_SP-4322.jpg',
  price: '$20',
  info: 'the best noodles adventure! creating a bowl of perfection with each twirl.'
},

{
  id: 4,
  title: 'Coffee',
  category: 'Breakfast',
  img: './jeremy-yap-jn-HaGWe4yw-unsplash_307148_CS-1830.jpg',
  price: '$13',
  info: 'our coffee is made from freshly ground beans, a precise thta gives a harmonious experience for true coffee enthusiasts.'
},

{
  id: 5,
  title: 'chicken',
  category: 'Lunch',
  img: './eiliv-aceron-w0JzqJZYX_E-unsplash_497752_SP-3596.jpg',
  price: '$40',
  info: 'Our rice and chicken dish, cooked with style and precision, a diet that transforms a simple meal into a cullinary delight'
},

{
  id: 6,
  title: 'milkshake',
  category: 'Drinks',
  img: './victor-rutka-4FujjkcI40g-unsplash_685379_CS-9564.jpg',
  price: '$15',
  info: 'velvety ice cream and the perfect blend for a creamy concoction that dances on your taste buds with each sip'
},
{
  id: 7,
  title: 'Hamburger',
  category: 'Lunch',
  img: './pix2_635855_CS-3160.jpg',
  price: '$10',
  info: 'velvety ice cream and the perfect blend for a creamy concoction that dances on your taste buds with each sip'
},
{
  id: 8,
  title: 'Doughnuts',
  category: 'Breakfast',
  img: './kobby-mendez-q54Oxq44MZs-unsplash_230092_CS-4302.jpg',
  price: '$7',
  info: 'Fried to perfection, coated with an array of fine sugars and filled with luscious creams.'
},

]

const menuBox = document.querySelector('.menu-box');
const menuSingle = document.querySelector('.menu-single')


window.addEventListener('DOMContentLoaded', function(){
displayMenuItems(menus)
});

const filterBtns = document.querySelectorAll('.filter-btn');


filterBtns.forEach(function(btn){
btn.addEventListener('click', function(e){
  const category = e.currentTarget.dataset.id;
  const menuCategory = menus.filter(function(menuItems){
  if(menuItems.category === category){
    return menuItems
  }
  });
  if (category === 'All'){
    displayMenuItems(menus);
  }
  else{displayMenuItems(menuCategory);}
})
})


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `
    <article class="menu-single">
             
                <img
                  src="${item.img}"
                  alt="${item.title}"
                />
              
              <div class="menu-info">
              <div class="menu-header">
              <h4>${item.title}</h4>
              <div class="price"><h4>${item.price}</h4></div>               
            </div>
                <p class="item-info">
                ${item.info}
                </p>
              </div>
            </article>` ;
   });
   displayMenu = displayMenu.join('');
   menuBox.innerHTML = displayMenu;
}



/*  review-slider */

const reviewSlider = document.querySelector('.review-slider');
const reviewIcon = document.querySelectorAll('.review-icon');
const lastSlide = document.querySelector('.last-slide')
const leftIcon = document.getElementById('left-icon');
const rightIcon = document.getElementById('right-icon');


const handleIcons = () => {
  let scrollVal = reviewSlider.scrollLeft;
  let maxScrollablewidth = reviewSlider.scrollWidth - reviewSlider.clientWidth;
  const reviewsliderWidth = reviewSlider.clientWidth;


if(scrollVal > 0){
  leftIcon.style.display = 'flex'
}
else{
  leftIcon.style.display = 'none'
}
if(scrollVal > maxScrollablewidth - (reviewSlider.clientWidth + reviewSlider.clientWidth)){
  rightIcon.style.display = 'none'
}
else{
  rightIcon.style.display = 'flex'
}
} 



reviewIcon.forEach(function(icons){
  icons.addEventListener('click', function(e){

    const reviewsliderWidth = reviewSlider.getBoundingClientRect().width;

    if (e.currentTarget.dataset.id === 'left'){
      reviewSlider.scrollLeft -= reviewsliderWidth;
    }
    if (e.currentTarget.dataset.id === 'right'){
      reviewSlider.scrollLeft += reviewsliderWidth;
    }
    setTimeout(() => handleIcons(), 150);
  })
})


scrollLinks.forEach(function(links){
  links.addEventListener('click', function(e){
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    const topbarHeight = topbar.getBoundingClientRect().height;


    window.scrollTo(
      left = 0,
      Top = position - topbarHeight
    )


  })
})
 





