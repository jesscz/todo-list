import './style.css';
import { validateForm } from './formValidation'
import { clearForm } from './toDos/clearForm';
import { pageLoad } from './pageLoad'
import { itemModal } from './toDos/itemModalBox';
import { projectModal } from './projects/projectModalBox';
import { newProject } from './projects/newProject';

(function component() {
  const element = document.createElement('div');
  element.append(pageLoad());
  document.body.appendChild(element);

  const itemContainer = document.getElementById('itemContainer');
  itemContainer.appendChild(itemModal());
  
  const newItemBtn = document.getElementById('newItemBtn');
  newItemBtn.addEventListener('click', () => {
    if (window.getComputedStyle(itemContainer).getPropertyValue('display') === 'none'){
      itemContainer.style.display = 'flex';
    }
  });

  // function myFunction() {
  //   document.getElementById("myForm").reset();
  // }

  const itemSubmit = document.getElementById('submitTask');
  itemSubmit.addEventListener('click', () => {
    validateForm();
    clearForm();
  });
  
  const itemClose = document.getElementById('itemCloseBtn');
  itemClose.addEventListener('click', () => {
    itemContainer.style.display = 'none';
  });

  window.onclick = function(event) {
    if (event.target == itemContainer) {
      itemContainer.style.display = "none";
    }
  }



  const projectContainer = document.getElementById('projectContainer');
  projectContainer.appendChild(projectModal());

  const newProjectBtn = document.getElementById('newProjectBtn');
  const newProjectModal = document.getElementById('newProjectModal');
  newProjectBtn.addEventListener('click', () => {
    if (window.getComputedStyle(newProjectModal).getPropertyValue('display') === 'none'){
      newProjectModal.style.display = 'block';
    }
  });

  const projSubmit = document.getElementById('submitProject');
  projSubmit.addEventListener('click', () => {
    newProject.addProject();
  });
  
  const projClose = document.getElementById('projectCloseBtn');
  projClose.addEventListener('click', () => {
    newProjectModal.style.display = 'none';
  });
  
})();
