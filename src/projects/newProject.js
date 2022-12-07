
const newProject = (() => {

    let projectList = [];
    
    function getProject(){
        return document.getElementById('inputProject').value;
    }

    

    function addProject(){
        let project = document.getElementById('selectProject');
        const projectOption = document.createElement('option');
        projectOption.innerText = getProject();
        project.appendChild(projectOption);
        console.log(project);
    }

    console.log(addProject());
});

export { newProject }