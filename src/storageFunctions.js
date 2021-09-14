import {projects} from './projectInput';
import {projectsRender} from './projectOnScreen';

let setData = () => {
    window.localStorage.setItem(`projects`, JSON.stringify(projects));
}

// Add local straoges key!!!!!!!!!!!!!!!!



let restore = () => {
    if (localStorage.length == 0) return

    else 
        {
            let data = JSON.parse(window.localStorage.getItem(`projects`));
            projects.splice(0, projects.length);
            data.forEach(el => {
                projects.push(el)
            })
        }

}




export {setData}
export {restore}
// export {projects}