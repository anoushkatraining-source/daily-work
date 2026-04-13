let todos = JSON.parse(localStorage.getItem("todos")) || [];
const errorDiv = document.getElementById('error');

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('todo-time');
    const urgencySelect = document.getElementById('severity');

    const text = input.value.trim();
    const time = timeInput.value; 
    const urgency = urgencySelect.value;
    
    if (text === '') return;
    
    todos.push({ text, time, completed: false, urgency: urgency });
    
    input.value = '';
    timeInput.value = '';
    
    saveTodos();
    renderTodos();
}

function validate(){
    errorDiv.style.display = (event.target.value.trim() !== '') ? 'none' : 'inline';
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = ''; 
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');
        
        const urgencyText = `<span class="urgency-label">${todo.urgency}</span>`;
        
        li.innerHTML = `
            <div class="todo-details">
                <span>${todo.text}</span>
                <span>Due: ${todo.time}</span>
                <div class="todo-actions">
                    <button class="tick-btn" onclick="toggleComplete(${index})">&#10004;</button>
                    <button class="delete-btn" onclick="deleteTodo(${index})">&#10006;</button>
                </div>
            </div>
            ${urgencyText}
        `;
        
        list.appendChild(li);
    });
}

renderTodos();

function sortByName(){
    todos.sort((a,b)=>{
        return a.text.localeCompare(b.text);
    });
    console.log(todos);
    renderTodos();
}

sortByName();