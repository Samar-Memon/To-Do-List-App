let add = document.getElementById('add');
let task = document.querySelector('.task');

function get() {
    if(add.value == ''){
        alert('Please Enter your Task')
    }else{
        let newElement = document.createElement('ul');
        newElement.innerHTML = `${add.value} <i class="fa-solid fa-trash"></i>`;
        task.appendChild(newElement);
        add.value = '';
        newElement.querySelector('i').addEventListener('click', del)
        function del() {
            newElement.remove()
        }
    }
}