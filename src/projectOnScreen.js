import {projects} from './projectInput';
import {tasktInput} from './taskInput';
import {editProject} from './editProject';
import {taskDoneListener} from './listeners';
import {priorityColorChange} from './listeners';
import {setData} from './storageFunctions';
 import {restore} from './storageFunctions';



let projectsRender = () => {
   restore()
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
                setData();
                render();
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
                setData();
                render(); 
            })
        })

    } 

    
    // Render everything on screen
    let render = () => {
        projectsDiv.innerHTML = '';
       // restore()
        if (projects == []) return
        else {
                projects.forEach((project) => {
                    

                    let singleProject = document.createElement('div');
                    singleProject.className = 'singleProject';

                    
                        let projectDeleteBtn = document.createElement('div');
                        projectDeleteBtn.innerText = 'X';
                        projectDeleteBtn.className = 'projectDeleteBtn';
                        projectDeleteBtn.id = project.id;

                        let projectEditBtn = document.createElement('div');
                        projectEditBtn.innerText = 'Edit';
                        projectEditBtn.className = 'projectEditBtn';
                        projectEditBtn.id = project.id;
    
                        let projectTitle = document.createElement('div');
                        projectTitle.className = 'projectTitle';
                        projectTitle.innerText = project.title;
        
                        let projectDate = document.createElement('div');
                        projectDate.className = 'projectDate';
                        projectDate.innerText = project.date;

                        let projectPriority = document.createElement('div');
                        projectPriority.className = 'projectPriority';
                        projectPriority.innerHTML = project.priority;
        
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

                            let taskDoneBtn = document.createElement('input');
                            taskDoneBtn.type = 'checkbox';
                            taskDoneBtn.className = 'taskDoneBtn';
                            taskDoneBtn.id = task.id;
                            taskDiv.append(taskDoneBtn, taskDeleteBtn);
                            

                            projectTask.append(taskDiv);


                        })


    
                    singleProject.append(projectDeleteBtn, projectEditBtn, projectTitle, projectDate, projectPriority, projectDescription, projectTask, addTaskBtn);
                    projectsDiv.append(singleProject);
                    priorityColorChange()


                })}

            deleteProjectListener();
            deleteTaskListener();
            editProject();
            taskDoneListener();
            

    }

    
    render();
    
    tasktInput();


}

export {projectsRender}
