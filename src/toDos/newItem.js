//adds the new item (to appear on the page and in a list)
// import { modalPopUpItem } from './itemModalBox';
// import { toDoList } from './index.js'

import { format } from 'date-fns';
import { itemFactory } from './itemFactory';
import { starClick } from './starClick';
import { taskComplete } from './completion';
import { deleteItem } from './deleteItem';
import editImage from '../pictures/edit.svg';

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
        let project = document.getElementById('selectProject').value;
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
        completionContainer.addEventListener('click', () => taskComplete(completionContainer, obj, i)); 
        completionContainer.append(obj[i][`newCompletion`]);

        const titleContainer = document.createElement('p');
        titleContainer.setAttribute('class', 'itemTitle');
        titleContainer.append(obj[i][`newTitle`]);

        const descriptionContainer = document.createElement('p');
        descriptionContainer.setAttribute('class', 'itemDescription');
        descriptionContainer.append(obj[i][`newDescription`]);
        
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
        if (obj[i][`newProject`] != 'Default'){
            projectContainer.append(obj[i][`newProject`]);
        }

        const priorityContainer = document.createElement('input');
        priorityContainer.type = 'image';
        priorityContainer.setAttribute('class', 'itemPriority');
        starClick(priorityContainer, obj, i);
        priorityContainer.append(toDoList[i][`newPriority`]);

        const editBtn = document.createElement('input');
        editBtn.type = 'image';
        editBtn.setAttribute('class', 'itemEdit');
        editBtn.src = editImage;

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'itemDelete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => deleteItem(i));    
        

        itemContainer.append(completionContainer, titleContainer, descriptionContainer, dueDateContainer,
            projectContainer, priorityContainer, editBtn, deleteBtn);
        console.log(toDoList);
        return itemContainer; 
    };
    


    return {  getList, getLength, getInput, addToList, updatePage };
})();

export { newToDo }