import { format } from 'date-fns';
import { differenceInCalendarDays } from 'date-fns'
import { newToDo } from './newItem.js'

const taskSort = (x) => {
    const list = document.getElementById('list');
    let toDo = newToDo.getList();
    if (list.innerHTML != null){
        list.innerHTML = '';
    }
    if (x == 'all'){
        list.className = '';
        for(let i=0; (i<toDo.length); i++){
            list.append(newToDo.updatePage(toDo, i));
        }
    }
    else if (x == 'imp'){
        list.className = '';
        list.classList.add('imp');
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newPriority`] == 'Yes'){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    else if (x == 'today'){
        list.className = '';
        list.classList.add('today');
        let date = format(
            new Date(),
            'y-MM-dd');
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newDueDate`] == date){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    else if (x == 'week'){
        list.className = '';
        list.classList.add('week');
        for(let i=0; (i<toDo.length); i++){
            let difference = differenceInCalendarDays(
                new Date(toDo[i][`newDueDate`]),
                new Date()
              )
            console.log (difference);
            if ((typeof(difference) == 'number') && (difference < 7)) {
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    
}

export { taskSort }