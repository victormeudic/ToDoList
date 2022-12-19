const createTask = document.querySelector(".btn-add")
const contentTask = document.querySelector(".form-control")
const taskGroup = document.querySelector('.task-group')
const form = document.querySelector("form")

let finalTaskContent = "";


contentTask.addEventListener("input", (e) => {
    finalTaskContent = e.target.value;
    console.log(finalTaskContent);
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

   const newInput = document.createElement('input')
   newInput.type = 'checkbox'
   newInput.classList.add('task-input')

   const newLabel = document.createElement('label')
   newLabel.classList.add('task-label')
   newLabel.innerText = task

   const newDelete = document.createElement('label')
   newDelete.classList.add('label-trash')

   const newBtnDelete = document.createElement('span')
   newBtnDelete.classList.add('material-symbols-outlined')
   newBtnDelete.innerText = "delete"

   newDelete.append(newBtnDelete)
   newLi.append(newInput)
   newLi.append(newLabel)
   newLi.append(newDelete)
   taskGroup.append(newLi)
}