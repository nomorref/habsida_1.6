import '../scss/style.scss'
import Swiper from 'swiper'
import 'swiper/swiper.scss'

const burgerBtn = document.querySelector('.nav-link--open')
const sidebar = document.querySelector('.sidebar')
const sidebarCloseBtn = document.querySelector('.close-menu-btn')

burgerBtn.addEventListener('click', function () {
  sidebar.classList.add('sidebar--visible')
})
sidebarCloseBtn.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--visible')
})
// accessing DOM element
const showButton = document.querySelector('.show-button')
const showButtonText = document.querySelector('.button-text')
const elements = document.querySelectorAll('.brand-list__item--hideable') // [] - array

showButton.addEventListener('click', function () {
  // if hidden
  const isVisible = elements[0].classList.contains('hidden') // true | false

  // toggle hidden state
  elements.forEach(function (element) {
    element.classList.toggle('hidden')
  })
  // change button text according to the state
  if (isVisible) {
    showButtonText.textContent = 'Скрыть'
  } else {
    showButtonText.textContent = 'Показать все'
  }
})

const swiper = new Swiper('.swiper', {
  spaceBetween: 16,
  slidesPerView: 1.25,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// right sidebar form
const sidebarForm = document.querySelector('.sidebar-right__form')

const sidebarFormOpen = document.querySelector('.sidebar-right__form--open-btn')
sidebarFormOpen.addEventListener('click', function () {
  sidebarForm.classList.add('sidebar-right__form--visible')
  document.body.style.overflow = 'hidden'
})

const sidebarFormClose = document.querySelector(
  '.sidebar-right__form--close-btn'
)
sidebarFormClose.addEventListener('click', function () {
  sidebarForm.classList.remove('sidebar-right__form--visible')
  document.body.style.overflow = 'auto'
})
// right sidebar form

// right sidebar call
const sidebarCall = document.querySelector('.sidebar-right__call')
const sidebarCallOpen = document.querySelector('.sidebar-right__call--open-btn')
sidebarCallOpen.addEventListener('click', function () {
  sidebarCall.classList.add('sidebar-right__call--visible')
  document.body.style.overflow = 'hidden'
})

const sidebarCallClose = document.querySelector(
  '.sidebar-right__call--close-btn'
)
sidebarCallClose.addEventListener('click', function () {
  sidebarCall.classList.remove('sidebar-right__call--visible')
  document.body.style.overflow = 'auto'
})

// right sidebar call
