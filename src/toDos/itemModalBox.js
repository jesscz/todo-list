import { format } from 'date-fns';
import closeBtn from '../pictures/close.svg';

const itemModal = () => {
    const element = document.createElement('div');
    element.id = 'newItemModal';

    const modalContent = document.createElement('div');
    modalContent.id = 'modalContent';
    const modalTitle = document.createElement('p');
    modalTitle.innerText = 'New To Do Item:';
    modalContent.appendChild(modalTitle);
     
    const form = document.createElement('form');
    form.id = 'myForm';
    form.name = 'myForm';

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    // titleLabel.for = 'inputTitle';
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    // title.setAttribute('name', 'inputTitle');
    title.setAttribute('id', 'inputTitle');
    titleLabel.appendChild(title);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description:';
    // descriptionLabel.for = 'inputDescription';
    const description = document.createElement('textarea');
    // description.type = 'text';
    // description.name = 'inputDescription';
    description.id = 'inputDescription';
    descriptionLabel.appendChild(description);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date:'
    // dueDateLabel.for = 'inputDueDate';
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.min = format(new Date(), 'yyyy-MM-dd');
    // dueDate.name = 'inputDueDate';
    dueDate.id = 'inputDueDate';
    dueDateLabel.appendChild(dueDate);

    const projectLabel = document.createElement('label');
    projectLabel.innerText = 'Project:'
    // projectLabel.for = 'inputProject';
    const project = document.createElement('select');
    // project.name = 'inputProject';
    project.id = 'selectProject';
    const projectOption = document.createElement('option');
    projectOption.innerText = 'Default';
    project.appendChild(projectOption);
    projectLabel.appendChild(project);

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Important:';
    // priorityLabel.for = 'inputPriority';
    const priority = document.createElement('select');
    // priority.name = 'inputPriority';
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


    
    const modalCloseBtn = document.createElement('input');
    modalCloseBtn.id = 'itemCloseBtn';
    modalCloseBtn.setAttribute('type', 'image');
    modalCloseBtn.src = closeBtn;
    // modalCloseBtn.innerText = 'Close';
    
    modalContent.append(form, modalCloseBtn);
    element.appendChild(modalContent);

    return element;
}

export { itemModal }