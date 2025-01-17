
  
const loader=document.getElementById('loader');
const content=document.getElementById('content');
window.onload = function(){ 
  loader.style.display ='none';      
     content.style.display = 'block';
        }
 
document.addEventListener('DOMContentLoaded', function() {
const header=document.querySelector('header');
const dev = document.querySelector('.dev');  

  let sticky = dev.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
});
const nav=document.querySelector('nav');
const close=document.querySelector('.closer');
