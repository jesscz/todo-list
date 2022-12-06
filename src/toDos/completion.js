
const taskComplete = (checkbox, toDoList, i) => {
    if (checkbox.checked === true){
        toDoList[i][`newCompletion`] = true;
        console.log(toDoList);
    }
    else if (checkbox.checked === false){
        toDoList[i][`newCompletion`] = false;
        console.log(toDoList)
    }
}

export { taskComplete }