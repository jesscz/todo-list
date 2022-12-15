const taskComplete = (checkbox, toDoList, i, titleContainer) => {
    if (toDoList[i][`newCompletion`] === false){
        checkbox.checked = false;
        titleContainer.style.textDecoration = 'none';
    }
    else if (toDoList[i][`newCompletion`] === true){
        checkbox.checked = true;
        titleContainer.style.textDecoration = 'line-through';
    }
    checkbox.addEventListener('click', function(){
        if (checkbox.checked === true){
            toDoList[i][`newCompletion`] = true;
            console.log(toDoList);
            titleContainer.style.textDecoration = 'line-through';
        }
        else if (checkbox.checked === false){
            toDoList[i][`newCompletion`] = false;
            console.log(toDoList);
            titleContainer.style.textDecoration = 'none';
        }
    })
}

export { taskComplete }