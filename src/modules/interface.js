import { format } from 'date-fns'

export default function userInterface() {
    const myContainer = document.getElementById('content')
    const createPage = function(e) {
        console.log(e.target.id);
        if (e.target.id === 'all') {
            myContainer.removeChild(myContainer.firstElementChild);
            const allTasks = document.createElement('article');
            allTasks.className = 'modules';
            const taskHeader = document.createElement('h2')
            taskHeader.textContent = e.target.textContent;
            allTasks.appendChild(taskHeader);
            myContainer.appendChild(allTasks);
        } else if (e.target.id === 'today') {
            myContainer.removeChild(myContainer.firstElementChild);
            const todaysTasks = document.createElement('article');
            todaysTasks.className = 'modules';
            const taskHeader = document.createElement('h2')
            taskHeader.textContent = e.target.textContent;
            todaysTasks.appendChild(taskHeader);
            myContainer.appendChild(todaysTasks);
        } else if (e.target.id === 'nextSeven') {
            myContainer.removeChild(myContainer.firstElementChild);
            const nextSevenTasks = document.createElement('article');
            nextSevenTasks.className = 'modules';
            const taskHeader = document.createElement('h2')
            taskHeader.textContent = e.target.textContent;
            nextSevenTasks.appendChild(taskHeader);
            myContainer.appendChild(nextSevenTasks);
        }
    }
    document.addEventListener('click',createPage);
}