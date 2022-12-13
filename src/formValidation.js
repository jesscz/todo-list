import { newToDo } from "./toDos/newItem";
import { clearForm } from './toDos/clearForm';

const validateForm = () =>{
    const element = document.createElement('div');
    let list = document.getElementById('list');
    const title = document.getElementById('inputTitle');
    const titleLabel = title.parentElement;
    const titleError = document.createElement('span');
    titleError.setAttribute('class', 'error');
    titleError.innerText = 'must have title';
    if (title.value != '') {
        newToDo.addToList(newToDo.getInput());
        list.appendChild(newToDo.updatePage(newToDo.getList(), (newToDo.getLength()-1)));
        clearForm();
        if (titleLabel.childElementCount > 1){ //remove title error if it is there
            titleLabel.removeChild(titleLabel.lastElementChild);
        }
    }
    else if (titleLabel.childElementCount == 1){
        titleLabel.appendChild(titleError);
    }

    return element;
}

export { validateForm }