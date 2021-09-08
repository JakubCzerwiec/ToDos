import {projects} from './projectInput';
import {deleted} from './projectInput'
// import {deleteProjectListener} from './listeners';



let projectsRender = () => {
   
    const projectsDiv = document.querySelector('.projectsDiv');
    projectsDiv.innerHTML = '';

    
    
    let deleteProjectListener = () => {
        let deleteButtons = document.querySelectorAll('.projectDeleteBtn');
        deleteButtons.forEach((element) => {
            element.addEventListener('click', () => {
                 deleted = projects.filter((pro) => {
                    return pro.id != element.id;
                })
              //  projects = [];
                projects = deleted;
                console.log(projects);
                render();
                })
        });
    }
    
    
    let render = () => {
        // const content = document.getElementById('content');
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
    render()
    
}








export {projectsRender}
