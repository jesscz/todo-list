import './style.css';
import { validateForm } from './formValidation'
import { pageLoad } from './pageLoad'
import { itemModal } from './toDos/itemModalBox';
import { projectModal } from './projects/projectModalBox'

(function component() {
  const element = document.createElement('div');
  element.append(pageLoad());
  document.body.appendChild(element);

  const itemContainer = document.getElementById('itemContainer');
  itemContainer.appendChild(itemModal());
  
  const newItem = document.getElementById('newItemBtn');
  const newItemModal = document.getElementById('newItemModal');
  newItem.addEventListener('click', () => {
    if (window.getComputedStyle(newItemModal).getPropertyValue('display') === 'none'){
      newItemModal.style.display = 'block';
    }
  });

  const itemSubmit = document.getElementById('submitTask');
  itemSubmit.addEventListener('click', () => {
    // newItemModal.style.display = 'none';
    validateForm();
  });
  
  const itemClose = document.getElementById('itemCloseBtn');
  itemClose.addEventListener('click', () => {
    newItemModal.style.display = 'none';
  });



  const projectContainer = document.getElementById('projectContainer');
  projectContainer.appendChild(projectModal());

  const newProject = document.getElementById('newProjectBtn');
  const newProjectModal = document.getElementById('newProjectModal');
  newProject.addEventListener('click', () => {
    if (window.getComputedStyle(newProjectModal).getPropertyValue('display') === 'none'){
      newProjectModal.style.display = 'block';
    }
  });

  const projSubmit = document.getElementById('submitProject');
  projSubmit.addEventListener('click', () => {
    console.log('true');
  });
  
  const projClose = document.getElementById('projectCloseBtn');
  projClose.addEventListener('click', () => {
    newProjectModal.style.display = 'none';
  });
  
})();
