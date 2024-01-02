const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-navigation');
const toggle = document.getElementById('togglebtn');
const logo = document.querySelector('.logo');

menu.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  toggle.classList.toggle("active");
})



/*topbar*/

const topbar = document.querySelector('.topbar');


window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 40) {
    topbar.classList.add('active-topbar');
    logo.classList.add('logo-active')
  }
  else { topbar.classList.remove('active-topbar')
  logo.classList.remove('logo-active')
}
})


/*scroll-links*/

const scrollLinks = document.querySelectorAll('.scroll-links');
scrollLinks.forEach(function (links) {
  links.addEventListener('click', function () {
    mobileNav.classList.remove("active");
    toggle.classList.remove("active");
  })
})


/*footer date*/

let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



/*scroll links*/


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
 

