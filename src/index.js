import './style.css';
import { validateForm } from './formValidation'
import { pageLoad } from './pageLoad'
import { modalPopUpItem } from './itemModalBox';
// import { newToDo } from './newItem';

(function component() {
  const element = document.createElement('div');
  element.append(pageLoad());
  document.body.appendChild(element);

  const modalAppend = document.getElementById('modalAppend');
  modalAppend.appendChild(modalPopUpItem());
  
  const newItem = document.getElementById('newItemBtn');
  const modal = document.getElementById('newItemModal');
  newItem.addEventListener('click', function(){
    if (window.getComputedStyle(modal).getPropertyValue("display") === "none"){
      modal.style.display = 'block';
    }
  });

  const submit = document.getElementById('submitTask');
  submit.addEventListener('click', function(){
    // modal.style.display = "none";
    validateForm();
  });
  
  const close = document.getElementById('itemCloseBtn');
  close.addEventListener('click', function(){
    modal.style.display = "none";
  });

  
})();

// module.exports = toDoList;