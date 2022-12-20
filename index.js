const body = document.querySelector('body')
const createTask = document.querySelector(".btn-add")
const contentTask = document.querySelector(".form-control")
const taskGroup = document.querySelector('.task-group')
const form = document.querySelector("form")

const toggleMode = document.querySelector('.toggle-mode')
const h1 = document.querySelector('h1')
toggleMode.addEventListener('click', () => {
    if (toggleMode.className === "toggle-mode") {
        toggleMode.classList.add('dark') 
    } else {
        toggleMode.classList.remove('dark')
    }

    if (h1.className === "") {
        h1.classList.add('dark') 
    } else {
        h1.classList.remove('dark')
    }

    if (body.className === "") {
        body.classList.add('dark') 
    } else {
        body.classList.remove('dark')
    }

    if (taskGroup.className === "task-group") {
        taskGroup.classList.add('dark') 
    } else {
        taskGroup.classList.remove('dark')
    }

})

let finalTaskContent = "";


contentTask.addEventListener("input", (e) => {
    finalTaskContent = e.target.value;
  });

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

createTask.addEventListener('click', () => {
    createToDo(finalTaskContent);
})

const createToDo = (task) => {
   const newLi = document.createElement('li') 
   newLi.classList.add('task-group-item')
   newLi.classList.add('a-faire') 


   const newInput = document.createElement('input')
   newInput.type = 'checkbox'
   newInput.classList.add('task-input')
   
   const newDiv = document.createElement('div')
   newDiv.classList.add('check-task')

   const newLabel = document.createElement('label')
   newLabel.classList.add('task-label')
   newLabel.innerText = task
   newInput.addEventListener("click", () => {
    if (newInput.checked) {
        newLabel.style.textDecoration = "line-through"
        newLi.classList.add('faites')
        newLi.classList.remove('a-faire')
    } else {
        newLabel.style.textDecoration = "none"
        newLi.classList.add('a-faire')
        newLi.classList.remove('faites')
    } 
   })

   const newDelete = document.createElement('label')
   newDelete.classList.add('label-trash')
   newDelete.innerText = " x"
   newDelete.addEventListener('click', () => {
        newLi.remove();
   })

   newLi.append(newDiv)
   newDiv.append(newInput)
   newDiv.append(newLabel)
   newLi.append(newDelete)
   taskGroup.append(newLi)

   const btnTodo = document.querySelector('.btn-todo')
   const btnDone = document.querySelector('.btn-done')
   const btnAll = document.querySelector('.btn-all')

    btnTodo.addEventListener('click', () => {
        btnTodo.classList.add('active')
        btnDone.classList.remove('active')
        btnAll.classList.remove('active')

        if (newLi.className === "task-group-item a-faire") {
            newLi.style.display = "flex"
        } else {
            newLi.style.display = "none"
        }
    })

    
    btnDone.addEventListener('click', () => {
        btnTodo.classList.remove('active')
        btnDone.classList.add('active')
        btnAll.classList.remove('active')

        if (newLi.className === "task-group-item faites") {
            newLi.style.display = "flex"
        } else {
            newLi.style.display = "none"
        }
    })

    
    btnAll.addEventListener('click', () => {
        btnTodo.classList.remove('active')
        btnDone.classList.remove('active')
        btnAll.classList.add('active')

        newLi.style.display = "flex"
    })
}

