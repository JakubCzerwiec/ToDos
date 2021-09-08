import {projects} from './projectInput';
// import {deleteProjectListener} from './listeners';

const projectsDiv = document.createElement('div');

let projectsRender = () => {
    const content = document.getElementById('content');

    content.append(projectsDiv);
    projectsDiv.innerHTML = '';

            projects.forEach((project) => {
                
                let projectDeleteBtn = document.createElement('div');
                projectDeleteBtn.innerText = 'X';
                projectDeleteBtn.className = 'projectDeleteBtn';
                projectDeleteBtn.id = project.id;

                let singleProject = document.createElement('div');
                singleProject.className = 'singleProject';

                let projectTitle = document.createElement('div');
                projectTitle.className = 'projectTitle';
                projectTitle.innerText = project.title;

                let projectDate = document.createElement('div');
                projectDate.className = 'projectDate';
                projectDate.innerText = project.date;

                let projectDescription = document.createElement('div');
                projectDescription.className = 'projectDescription'
                projectDescription.innerText = project.description;

                singleProject.append(projectDeleteBtn, projectTitle, projectDate, projectDescription);
                projectsDiv.append(singleProject)
            })
            
        deleteProjectListener();

        

    
}



let deleteProjectListener = () => {
    let deleteButtons = document.querySelectorAll('.projectDeleteBtn');
    deleteButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            projects.splice(index, 1)
            console.log(projects);
            
            projectsRender();
            })
    });
}




export {projectsRender}
