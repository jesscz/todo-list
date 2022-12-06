import { format } from 'date-fns';
import { differenceInCalendarDays } from 'date-fns'
import { newToDo } from "./newItem";

const deleteItem = (i) => {
    let toDo = newToDo.getList();
    const list = document.getElementById('list');
    toDo.splice(i, 1);
    console.log(toDo);
    // console.log("index" + i);
    
    // let len = list.childNodes.length;
    // console.log('length of childnodes under list:' + len);
    // console.log(list.children[i]);
    // console.log(list.classList.value);
    list.innerHTML = '';
    if (list.classList.value == ''){
        for(let i=0; (i<toDo.length); i++){
            list.append(newToDo.updatePage(toDo, i));
        }
    }
    else if (list.classList.value == 'imp'){
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newPriority`] == 'Yes'){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    else if (list.classList.value == 'today'){
        let date = format(
            new Date(),
            'y-MM-dd');
        for(let i=0; (i<toDo.length); i++){
            if (toDo[i][`newDueDate`] == date){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
    else if (list.classList.value == 'week'){
        for(let i=0; (i<toDo.length); i++){
            let difference = differenceInCalendarDays(
                new Date(toDo[i][`newDueDate`]),
                new Date()
              )
            console.log (difference);
            if (difference < 7){
                list.append(newToDo.updatePage(toDo, i));
            }
        }
    }
//    let n = i-1;
    // list.removeChild(list.children[i]);
    // toDo = newToDo.getList();
}

export { deleteItem }