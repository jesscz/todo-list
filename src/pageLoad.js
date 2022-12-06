import { format } from 'date-fns';
import { taskSort } from './toDos/taskSort';
import { newToDo } from './toDos/newItem';

const pageLoad = () => {
    const element = document.createElement('div');
    element.id = 'content';


    const title = document.createElement('h1');
    title.innerText = 'Your To Do List';
    title.id = 'mainTitle';

    const right = document.createElement('div');
    right.id = 'right';

    const newItem = document.createElement('button');
    newItem.innerText = '+ Add Task';
    newItem.id = 'newItemBtn';

    const itemContainer = document.createElement('div');
    itemContainer.id = 'itemContainer';

    const list = document.createElement('div');
    list.id = 'list';

    right.append(newItem, itemContainer, list);


    const left = document.createElement('div');
    left.id = 'left';

    const date = document.createElement('div');
    const dateToday = format(new Date(), 'E MMM do y');
    date.id = 'mainDate';
    date.append(dateToday);

    const all = document.createElement('button');
    all.innerText = 'All Tasks';
    all.setAttribute('class', 'taskSort');
    // all.setAttribute('id', 'allTasks');
    all.addEventListener('click', () => taskSort('all'));

    const imp = document.createElement('button');
    imp.innerText = 'Important';
    imp.setAttribute('class', 'taskSort');
    // imp.setAttribute('id', 'impTasks');
    imp.addEventListener('click', () => taskSort('imp'));

    const today = document.createElement('button');
    today.innerText = 'Today';
    today.setAttribute('class', 'taskSort');
    // today.setAttribute('id', 'todayTasks');
    today.addEventListener('click', () => taskSort('today'));

    const week = document.createElement('button');
    week.innerText =  'This Week';
    week.setAttribute('class', 'taskSort');
    // week.setAttribute('id', 'weekTasks');
    week.addEventListener('click', () => taskSort('week'));

    const proj = document.createElement('div');
    proj.innerText = 'Projects';

    const newProject = document.createElement('button');
    newProject.innerText = '+ New Project';
    newProject.id = 'newProjectBtn';

    const projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';

    left.append(all, imp, today, week, proj, 
        newProject, projectContainer);
    

    element.append(title, date, left, right);

    return element;
};

export { pageLoad }