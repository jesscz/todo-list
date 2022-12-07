
const taskComplete = (checkbox, toDoList, i) => {
    let title = document.getElementsByClassName('itemTitle');
    let thisTitle = title[i];
    if (checkbox.checked === true){
        toDoList[i][`newCompletion`] = true;
        thisTitle.style.textDecoration = 'line-through';
    }
    else if (checkbox.checked === false){
        toDoList[i][`newCompletion`] = false;
        thisTitle.style.textDecoration = 'none';
    }
}

export { taskComplete }