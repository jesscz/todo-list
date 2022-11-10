const pageLoad = () => {
    const element = document.createElement('div');
    element.id = 'content';

    const title = document.createElement('h1');
    title.innerText = 'Your To Do List';
    title.id = 'title';


    const left = document.createElement('div');
    left.id = 'left';

    const all = document.createElement('div');
    all.innerText = 'All Tasks';

    const imp = document.createElement('div');
    imp.innerText = 'Important';

    const today = document.createElement('div');
    today.innerText = 'Today';

    const week = document.createElement('div');
    week.innerText =  'This Week';

    const proj = document.createElement('div');
    proj.innerText = 'Projects';

    const newProject = document.createElement('button');
    newProject.innerText = '+ New Project';
    newProject.id = 'newProjectBtn';


    const right = document.createElement('div');
    right.id = 'right';

    const newItem = document.createElement('button');
    newItem.innerText = '+ Add Task';
    newItem.id = 'newItemBtn';


    left.append(all, imp, today, week, proj, newProject);
    right.append(newItem);
    element.append(title, left, right);

    return element;
}

export { pageLoad }