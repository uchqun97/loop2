"use strict";

const todoList = [
    {
        name: "erta uxlash", time: "2024-01-01"
    }
]

renderTodo()

function renderTodo() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]
        const {name,time} = todoObject;
        const html = `<p>
        ${name} ${time}
        
        <button
        onclick="
        todoList.splice(${i},1)
        renderTodo()
        "
        >Delete</button>
        </p>`
        
        todoListHTML += html
    }

    console.log(todoListHTML)

    document.querySelector('.todo-list').innerHTML = todoListHTML
}

function getTodo() {
    const inputElement = document.querySelector('.get-todo')

    const name = inputElement.value

    const dateInputElement = document.querySelector('.date')

    const time = dateInputElement.value
    if (name === '' || time === '') {
        alert('To\'ldir');
        return; 
    }else{
        todoList.push({
            //name: name,
            //time: time},
            name,
            time })

    }

    
    console.log(todoList)

    inputElement.value = ''
    renderTodo()
}
