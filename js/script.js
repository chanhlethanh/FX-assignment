'use strict';
const modal = document.querySelector('.xa');

const btnsOpenModal = document.querySelector('.show-modal');
const bntsCloseModal = document.querySelector('.close-modal');
// console.log(document.getElementById('exampleInputEmail1').value);
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pattern = /W3schools/i;

// function pattern
const funixOpen = function () {
  const text = document.getElementById('exampleInputEmail1').value;
  if (text.match(regex) && modal.classList.contains('hidden')) {
    btnsOpenModal.innerHTML = 'Hidden';
    modal.classList.remove('hidden');
  } else if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    btnsOpenModal.innerHTML = 'Submit';
  } else {
    alert(`Not match pattern`);
  }
};

// bntsCloseModal.addEventListener('click', funixClose);
btnsOpenModal.addEventListener('click', funixOpen);

// -----Require 10
const modal2 = document.querySelector('.xa2');

const btnsOpenModal2 = document.querySelector('.show-modal2');
const funix2 = function () {
  if (modal2.classList.contains('hidden')) {
    btnsOpenModal2.innerHTML = 'Hidden';
    modal2.classList.remove('hidden');
  } else if (!modal2.classList.contains('hidden')) {
    modal2.classList.add('hidden');
    btnsOpenModal2.innerHTML = 'Submit';
  }
};

btnsOpenModal2.addEventListener('click', funix2);

// ----------
// -----Require 10
const modal3 = document.querySelector('.xa3');

const btnsOpenModal3 = document.querySelector('.show-modal3');
const funix3 = function () {
  if (modal3.classList.contains('hidden')) {
    btnsOpenModal3.innerHTML = 'Hidden';
    modal3.classList.remove('hidden');
  } else if (!modal3.classList.contains('hidden')) {
    modal3.classList.add('hidden');
    btnsOpenModal3.innerHTML = 'Submit';
  }
};

btnsOpenModal3.addEventListener('click', funix3);

// ----------
// -----Require 10
const modal4 = document.querySelector('.xa4');

const btnsOpenModal4 = document.querySelector('.show-modal4');
const funix4 = function () {
  if (modal4.classList.contains('hidden')) {
    btnsOpenModal4.innerHTML = 'Hidden';
    modal4.classList.remove('hidden');
  } else if (!modal4.classList.contains('hidden')) {
    modal4.classList.add('hidden');
    btnsOpenModal4.innerHTML = 'Submit';
  }
};

btnsOpenModal4.addEventListener('click', funix4);

// ----------
// -----Require 10
const modal5 = document.querySelector('.xa5');

const btnsOpenModal5 = document.querySelector('.show-modal5');
const funix5 = function () {
  if (modal5.classList.contains('hidden')) {
    btnsOpenModal5.innerHTML = 'Hidden';
    modal5.classList.remove('hidden');
  } else if (!modal5.classList.contains('hidden')) {
    modal5.classList.add('hidden');
    btnsOpenModal5.innerHTML = 'Submit';
  }
};

btnsOpenModal5.addEventListener('click', funix5);

// ----------
// -----Require 10
const modal6 = document.querySelector('.xa6');

const btnsOpenModal6 = document.querySelector('.show-modal6');
const funix6 = function () {
  if (modal6.classList.contains('hidden')) {
    btnsOpenModal6.innerHTML = 'Hidden';
    modal6.classList.remove('hidden');
  } else if (!modal6.classList.contains('hidden')) {
    modal6.classList.add('hidden');
    btnsOpenModal6.innerHTML = 'Submit';
  }
};

btnsOpenModal6.addEventListener('click', funix6);

// ----------
// -----Require 10
const modal7 = document.querySelector('.xa7');

const btnsOpenModal7 = document.querySelector('.show-modal7');
const funix7 = function () {
  if (modal7.classList.contains('hidden')) {
    btnsOpenModal7.innerHTML = 'Hidden';
    modal7.classList.remove('hidden');
  } else if (!modal7.classList.contains('hidden')) {
    modal7.classList.add('hidden');
    btnsOpenModal7.innerHTML = 'Submit';
  }
};

btnsOpenModal7.addEventListener('click', funix7);

document
  .querySelector('.hide-item')
  .addEventListener('click', () => alert('hidden item still triggers events'));
