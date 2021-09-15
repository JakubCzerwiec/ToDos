import { projects } from "./projectInput";
import { setData } from "./storageFunctions";

let sortByDate = () => {
    const sortDate = document.querySelector('.sortDate');

    sortDate.addEventListener('click', () => {
        let sorted = projects.sort((a, b) => 
        (a.date > b.date) ? 1 : -1);

        projects.splice(0, projects.length);

        projects.push(sorted);
        setData()
        render()
        
})
}





export {sortByDate}