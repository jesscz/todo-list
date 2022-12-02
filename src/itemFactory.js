const itemFactory = (title, description, dueDate, project, priority) => {
    const newTitle = title;
    const newDescription = description;
    const newDueDate = dueDate;
    const newProject = project;
    const newPriority = priority;
    const newCompletion = false;
    return {newTitle, newDescription, newDueDate, newPriority, newProject, newCompletion}
};

export {itemFactory}