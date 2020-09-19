const addBtn = document.querySelector('#addBtn');
const removebtn = document.querySelector('#removeBtn');
let list = document.querySelector('#todo-list');
const form = document.querySelector('#addremove');
let savedList = JSON.parse(localStorage.getItem('list'))  || [];

for (let item of savedList) {
    const newLi = document.createElement('li');
    newLi.innerText = item.task;
    list.append(newLi);
}

form.addEventListener('click', function(e) {
    e.preventDefault();

    // Add whatever is typed in the box by pressing the add button
    if (e.target.id === 'addBtn') {
        if (document.querySelector('#newTodo').value !== "") {
            const addInput = document.querySelector('#newTodo');
            const newLi = document.createElement('li');
            newLi.innerText = addInput.value;
            list.append(newLi);
            savedList.push({task: addInput.value});
            form.reset();
        }
    // Removes all items that are crossed out
    } else if (e.target.id === 'removeBtn') {
        const completed = document.querySelectorAll('.complete');
        for (let item of completed) {
            for (let i = 0;i < savedList.length; i++) {
                if (savedList[i].task === item.innerText) {
                    savedList.splice(i , 1);
                }
            }
            document.querySelector('.complete').remove();
        }
    } 
    localStorage.setItem('list', JSON.stringify(savedList));
        });


list.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.classList.toggle('complete');
});
