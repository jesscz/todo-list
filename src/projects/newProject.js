import { newToDo } from '../toDos/newItem.js';

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
        const projectBtn = document.createElement('button');
        projectBtn.setAttribute('class', 'projSort');
        projectBtn.innerText = getProject();
        projectContainer.appendChild(projectBtn);
        
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

    function projSort(projectBtn){
        
    }
    return { getProject, addProject }
})();

export { newProject }