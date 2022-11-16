import { format } from 'date-fns';

const modalPopUpItem = () =>{
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

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description:';
    descriptionLabel.for = 'inputDescription';
    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'inputDescription';
    description.id = 'inputDescription';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date:'
    dueDateLabel.for = 'inputDueDate';
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.min = format(new Date(), 'yyyy-MM-dd');
    dueDate.name = 'inputDueDate';
    dueDate.id = 'inputDueDate';

    const projectLabel = document.createElement('label');
    projectLabel.innerText = 'Project:'
    projectLabel.for = 'inputProject';
    const project = document.createElement('select');
    project.name = 'inputProject';
    project.id = 'inputProject';
    const projectOption = document.createElement('option');
    projectOption.innerText = 'None';
    project.appendChild(projectOption);

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.type = 'submit';
    submit.id = 'submitTask';

    form.append(titleLabel, title, descriptionLabel, description, 
        dueDateLabel, dueDate, projectLabel, project, submit);


    
    const modalCloseBtn = document.createElement('button');
    modalCloseBtn.id = 'itemCloseBtn';
    modalCloseBtn.innerText = 'Close';
    
    modalContent.append(form, modalCloseBtn);
    modal.appendChild(modalContent);

    return modal;
}

export { modalPopUpItem }