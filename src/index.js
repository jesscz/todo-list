import './style.css';
import { newToDo } from './newItem'
import { pageLoad } from './pageLoad'

(function component() {
  const element = document.createElement('div');
  element.append(pageLoad());
  document.body.appendChild(element);
  
  const newItem = document.getElementById('newItemBtn');
  newItem.addEventListener('click', newToDo);
})();