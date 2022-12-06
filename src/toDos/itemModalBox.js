import { format } from 'date-fns';

const itemModal = () => {
    const modal = document.createElement('div');
    modal.class = 'modal';
    modal.id = 'newItemModal';

    const modalContent = document.createElement('div');
    modalContent.class = 'modalContent';
    modalContent.innerText = 'New To Do Item:';
    
    const form = document.createElement('form');
    form.name = 'myForm';

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    titleLabel.for = 'inputTitle';
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'inputTitle');
    title.setAttribute('id', 'inputTitle');
    titleLabel.appendChild(title);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description:';
    descriptionLabel.for = 'inputDescription';
    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'inputDescription';
    description.id = 'inputDescription';
    descriptionLabel.appendChild(description);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date:'
    dueDateLabel.for = 'inputDueDate';
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.min = format(new Date(), 'yyyy-MM-dd');
    dueDate.name = 'inputDueDate';
    dueDate.id = 'inputDueDate';
    dueDateLabel.appendChild(dueDate);

    const projectLabel = document.createElement('label');
    projectLabel.innerText = 'Project:'
    projectLabel.for = 'inputProject';
    const project = document.createElement('select');
    project.name = 'inputProject';
    project.id = 'inputProject';
    const projectOption = document.createElement('option');
    projectOption.innerText = 'Default';
    project.appendChild(projectOption);
    projectLabel.appendChild(project);

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Important:';
    priorityLabel.for = 'inputPriority';
    const priority = document.createElement('select');
    priority.name = 'inputPriority';
    priority.id = 'inputPriority';
    const priorityNo = document.createElement('option');
    priorityNo.innerText = 'No';
    const priorityYes = document.createElement('option');
    priorityYes.innerText = 'Yes';
    priority.append(priorityNo,priorityYes);
    priorityLabel.appendChild(priority);

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.type = 'button';
    submit.id = 'submitTask';

    form.append(titleLabel, descriptionLabel, dueDateLabel, 
        projectLabel, priorityLabel, submit);


    
    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.id = 'itemCloseBtn';
    modalCloseBtn.innerText = 'Close';
    
    modalContent.append(form, modalCloseBtn);
    modal.appendChild(modalContent);

    return modal;
}

export { itemModal }