import { format } from 'date-fns';
import { newToDo } from './newItem.js'

const taskSort = (x) =>{
    let list = document.getElementById('list');
    let toDo = newToDo.getList();
    list.innerHTML = '';
    let dueDate = format(
        new Date(),
        'y-MM-dd');
    console.log(x);
    if (x == 'all'){
        for(let i=0; (i<toDo.length); i++){
            list.append(newToDo.updatePage(toDo, i));
        }
    }
    if (x == 'imp'){
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newPriority`] == 'Yes'){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    if (x == 'today'){
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newDueDate`] == dueDate){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    if (x == 'week'){
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newDueDate`] == dueDate){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
}

export { taskSort }