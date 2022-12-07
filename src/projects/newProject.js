
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
        projectBtn.innerText = getProject();
        projectContainer.appendChild(projectBtn);
    }

    return { addProject }
})();

export { newProject }