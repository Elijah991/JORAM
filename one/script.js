const wrapper = document.querySelector('wrapper');
const LoginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-Popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click'.()=> {
  wrapper.classList.add('active');
})

LoginLink.addEventListener('click'.()=> {
  wrapper.classList.remove('active');
})

btnPopup.addEventListener('click'.()=> {
  wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click'.()=> {
  wrapper.classList.add('active-popup');
})

