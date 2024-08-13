// let button = document.getElementById("add_task")
// button.addEventListener("click",()=>{
//     let input = document.getElementById("input_text")
//     let inputValue = input.value;
//     // console.log(inputValue)
//     let text_container = document.getElementById("list_container")
//     text_container.innerHTML+=`
//         <ul>
//             <div class="output_container">
//                 <input type="checkbox" id="check_box">
//                 <span class="task-text">${inputValue}</span>
//                 <span class="remove-task">✖</span>
//             </div>
//         </ul>
//     `
// })

// let check = document.getElementById("checkbox1")
// check.onchange = ()=>{
//     if(check.checked){
//         console.log("checked")
//     }
//     else{
//         console.log("not checked")
//     }
// }
// // console.log(check)
// // if(check){
// //     console.log("checkbox is checked")
// // }
// // else{
// //     console.log("false")
// // }

 let form = document.getElementById('task_form')
    form.addEventListener('submit', (event)=> {
    event.preventDefault();

    let title = document.getElementById('task_title').value;
    let description = document.getElementById('task_description').value;
    let category = document.getElementById('task_category').value;
    let filter = document.getElementById('filter').value

    let taskItem = document.createElement('div');
    taskItem.classList.add('card', 'mb-2');
    taskItem.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text"><small class="text-muted">${category}</small></p>
            <p class="card-text"><small class="text-muted">${filter}</small></p>
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
        </div>
    `;

    document.getElementById('list_container').appendChild(taskItem);

    document.getElementById('task_form').reset();

    taskItem.querySelector('.delete-task').addEventListener('click', ()=> {
        taskItem.remove();
    });
});


