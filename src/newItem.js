//adds the new item (to appear on the page and in a list)
// import { modalPopUpItem } from './itemModalBox';
// import { toDoList } from './index.js'

import { format } from 'date-fns';
import { itemFactory } from './itemFactory';
import { starClick } from './starClick';
import { deleteItem } from './deleteItem';

const newToDo = (() => {
    
    let toDoList = [];

    function getList(){
        return toDoList;
    }
    
    function getLength(){
        return toDoList.length;
    }

    function getInput(){
        let title = document.getElementById('inputTitle').value;
        let description = document.getElementById('inputDescription').value;
        let dueDate = document.getElementById('inputDueDate').value;
        let project = document.getElementById('inputProject').value;
        let priority = document.getElementById('inputPriority').value;
        const newItem = itemFactory(title, description, dueDate, project, priority);
        return newItem;
    }
    
    function addToList(newItem) {
        toDoList.push(newItem);
    }
    
    function updatePage(obj, i){
        const itemContainer = document.createElement('div');
        itemContainer.setAttribute('class', 'toDoItems');
        const completionContainer = document.createElement('input');
        completionContainer.type = 'checkbox';
        completionContainer.setAttribute('class', 'checkbox');
        const titleContainer = document.createElement('p');
        titleContainer.setAttribute('class', 'itemTitle');
        const descriptionContainer = document.createElement('p');
        descriptionContainer.setAttribute('class', 'itemDescription');
        const dueDateContainer = document.createElement('p');
        dueDateContainer.setAttribute('class', 'itemDueDate');
        if (obj[i][`newDueDate`] != ''){
            let year = obj[i][`newDueDate`].slice(0,4);
            let month = obj[i][`newDueDate`].slice(5,7);
            let day = obj[i][`newDueDate`].slice(-2);
            let dueDate = format(
                new Date(year +`, `+ month+`, `+day),
                'E MMM do y');
            dueDateContainer.append(dueDate);
        }
        const projectContainer = document.createElement('p');
        projectContainer.setAttribute('class', 'itemProject');
        const priorityContainer = document.createElement('input');
        priorityContainer.type = 'image';
        priorityContainer.setAttribute('class', 'itemPriority');
        starClick(priorityContainer, obj, i);
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'itemDelete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(i));
        completionContainer.append(obj[i][`newCompletion`]);
        titleContainer.append(obj[i][`newTitle`]);
        descriptionContainer.append(obj[i][`newDescription`]);
        if (obj[i][`newProject`] != 'Default'){
            projectContainer.append(obj[i][`newProject`]);
        }
        priorityContainer.append(toDoList[i][`newPriority`]);
        itemContainer.append(completionContainer, titleContainer, descriptionContainer, dueDateContainer,
            projectContainer, priorityContainer, deleteBtn);
        console.log(toDoList);
        return itemContainer; 
        
    };
    


    return {  getList, getLength, getInput, addToList, updatePage };
})();

export { newToDo }