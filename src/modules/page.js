export function createPage(page){
    const allTasks = document.createElement('article');
    allTasks.className = 'modules';
    const taskHeader = document.createElement('h2')
    taskHeader.textContent = page;
    allTasks.appendChild(taskHeader);
    return allTasks
}

export function loadPage(){

    const content = document.getElementById('content');
    content.appendChild(createPage('All Tasks'))
}