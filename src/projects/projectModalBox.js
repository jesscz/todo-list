const projectModal = () => {
    const element = document.createElement('div');
    element.id = 'newProjectModal';

    const project = document.createElement('input');
    project.setAttribute('type', 'text');
    project.setAttribute('id', 'inputProject');

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.id = 'submitProject';

    const close = document.createElement('button');
    close.id = 'projectCloseBtn';
    close.innerText = 'Close';

    
    element.append(project, submit, close);
    return element;
}

export { projectModal }