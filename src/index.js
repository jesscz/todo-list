import './style.css';
import { validateForm } from './formValidation'
import { pageLoad } from './pageLoad'
import { modalPopUpItem } from './itemModalBox';

(function component() {
  const element = document.createElement('div');
  element.append(pageLoad());
  document.body.appendChild(element);

  const right = document.getElementById('right');
  right.appendChild(modalPopUpItem());
  
  const newItem = document.getElementById('newItemBtn');
  const modal = document.getElementById('newItemModal');
  newItem.addEventListener('click', function(){
    if (window.getComputedStyle(modal).getPropertyValue("display") === "none"){
      modal.style.display = "block";
    }
  });

  const submit = document.getElementById('submitTask');
  submit.addEventListener('click', validateForm());
  
  const close = document.getElementById('itemCloseBtn');
  close.addEventListener('click', function(){
    alert('hi')
  });
})();