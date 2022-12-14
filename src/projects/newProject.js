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
        //create proj to append to page visually
        const projectContainer = document.getElementById('projectContainer');
        const newProject = document.createElement('div');
        const project = document.createElement('button');
        project.setAttribute('class', 'projSort');
        project.innerText = getProject();
        projSort(project);
     
        //add delete button to project visually
        const projectDelete = document.createElement('input');
        projectDelete.setAttribute('type', 'image');
        projectDelete.src = closeBtn;
        projectDelete.setAttribute('class', 'projectDelete');
        newProject.append(project, projectDelete);

        //add to page visually
        projectContainer.appendChild(newProject);

        //add delete button functionality
        deleteProj(projectContainer, newProject, projectDelete, projectSelect, projectOption);
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
            list.className = '';
            list.classList.add('proj');
            list.classList.add(project);
            console.log(list.classList.value)
            for(let i=0; (i<toDo.length); i++){
                if (toDo[i][`newProject`] === project){
                list.append(newToDo.updatePage(toDo, i));
                }
            }
        })
    }
    
    function deleteProj(outside, container, deleteBtn, dropdown, option){
        deleteBtn.addEventListener('click', () => {
            //delete project on page
            outside.removeChild(container);
            //delete project option in dropdown
            dropdown.removeChild(option);
        })
    }

    return { getProject, addProject }
})();

export { newProject }