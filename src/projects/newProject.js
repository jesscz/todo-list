import { newToDo } from '../toDos/newItem.js';
import closeBtn from '../pictures/close.svg';

const newProject = (() => {
    
    function getProject(){
        return document.getElementById('inputProject').value;
    }

    function addProject(){
        //add to dropdown selection
        const projectSelect = document.getElementById('selectProject');
        const projectOption = document.createElement('option');
        projectOption.innerText = getProject();
        projectSelect.appendChild(projectOption);
        //add to page visually
        const projectContainer = document.getElementById('projectContainer');
        const newProject = document.createElement('div');
        const project = document.createElement('button');
        project.setAttribute('class', 'projSort');
        project.innerText = getProject();
        projSort(project);

        //add delete button to project
        const projectDelete = document.createElement('input');
        projectDelete.setAttribute('type', 'image');
        projectDelete.src = closeBtn;
        projectDelete.setAttribute('class', 'projectDelete');
        newProject.append(project, projectDelete);

        projectContainer.appendChild(newProject);
    }

    function projSort(projectBtn){
        //add event listener to project btn
        const list = document.getElementById('list');
        let toDo = newToDo.getList();
        const project = getProject();
        projectBtn.addEventListener('click', () => {
            if (list.innerHTML != null){
                list.innerHTML = '';
            }
            for(let i=0; (i<toDo.length); i++){
                if (toDo[i][`newProject`] === project){
                list.append(newToDo.updatePage(toDo, i));
                }
            }
        })
    }

    return { getProject, addProject }
})();

export { newProject }