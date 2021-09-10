import {projects} from './projectInput';
import {tasktInput} from './taskInput';



let projectsRender = () => {
   
    const projectsDiv = document.querySelector('.projectsDiv');
    
    // Listener to delete project
    let deleteProjectListener = () => {
        let deleteButtons = document.querySelectorAll('.projectDeleteBtn');
        deleteButtons.forEach((element) => {
            element.addEventListener('click', () => {
                let deleted = projects.filter((pro) => {
                    return pro.id != element.id;
                })
                
                projects.splice(0, projects.length);
                
                    deleted.forEach(el => {
                        projects.push(el)
                    })
              
                console.log(projects);
                render();
                tasktInput(); 
                })
        });
    }

    // Listener to delete task
   let deleteTaskListener = () => {
        let taskDeleteBtn = document.querySelectorAll('.taskDeleteBtn');
        taskDeleteBtn.forEach(element => {
            element.addEventListener('click', () => {
                projects.forEach(project => {
                   let deleted = project.tasks.filter((task) => {
                        return task.id != element.id;
                    })
                    project.tasks.splice(0, project.tasks.length);
                    deleted.forEach(el => {
                        project.tasks.push(el)
                    })
                })
                console.log(projects);
                render(); 
                tasktInput(); 
            })
        })

    } 
    
    // Render everything on screen
    let render = () => {
        projectsDiv.innerHTML = '';

                projects.forEach((project) => {

                    let singleProject = document.createElement('div');
                    singleProject.className = 'singleProject';
                    
                        let projectDeleteBtn = document.createElement('div');
                        projectDeleteBtn.innerText = 'X';
                        projectDeleteBtn.className = 'projectDeleteBtn';
                        projectDeleteBtn.id = project.id;
    
                        let projectTitle = document.createElement('div');
                        projectTitle.className = 'projectTitle';
                        projectTitle.innerText = project.title;
        
                        let projectDate = document.createElement('div');
                        projectDate.className = 'projectDate';
                        projectDate.innerText = project.date;
        
                        let projectDescription = document.createElement('div');
                        projectDescription.className = 'projectDescription'
                        projectDescription.innerText = project.description;

                        let projectTask = document.createElement('div');
                        projectTask.className = 'projectTasks';

                        let addTaskBtn = document.createElement('div');
                        addTaskBtn.className = 'addTaskBtn';
                        addTaskBtn.innerText = '+';


                        project.tasks.forEach(task => {
                            let taskDiv = document.createElement('div');
                            taskDiv.className = 'taskDiv';
                            taskDiv.innerText = task.title;
                            
                            let taskDeleteBtn = document.createElement('div');
                            taskDeleteBtn.innerText = 'XX';
                            taskDeleteBtn.className = 'taskDeleteBtn';
                            taskDeleteBtn.id = task.id;
                            taskDiv.append(taskDeleteBtn);

                            projectTask.append(taskDiv);
                        })


    
                    singleProject.append(projectDeleteBtn, projectTitle, projectDate, projectDescription, projectTask, addTaskBtn);
                    projectsDiv.append(singleProject);

                    
                })
                
            deleteProjectListener();
            deleteTaskListener();
            

    }
    render();
    tasktInput();
    
}

export {projectsRender}
