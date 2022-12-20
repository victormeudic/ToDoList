const createTask = document.querySelector(".btn-add")
const contentTask = document.querySelector(".form-control")
const taskGroup = document.querySelector('.task-group')
const form = document.querySelector("form")

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

   newLi.append(newInput)
   newLi.append(newLabel)
   newLi.append(newDelete)
   taskGroup.append(newLi)

   const btnTodo = document.querySelector('.btn-todo')

    btnTodo.addEventListener('click', () => {
        if (newLi.className === "task-group-item a-faire") {
            newLi.style.display = "block"
        } else {
            newLi.style.display = "none"
        }
    })

    const btnDone = document.querySelector('.btn-done')
    
    btnDone.addEventListener('click', () => {
        if (newLi.className === "task-group-item faites") {
            newLi.style.display = "block"
        } else {
            newLi.style.display = "none"
        }
    })

    const btnAll = document.querySelector('.btn-all')
    
    btnAll.addEventListener('click', () => {
        newLi.style.display = "block"
    })
}



