const inputbox = document.getElementById('todo-input'); //입력 상자 만들기
const addToDo = document.getElementById('todo-add');    //요소 추가
const todolist = document.getElementById('todo-list');  //목록에 추가

//localstorage에 저장된 내용을 화면에 띄우기&기존 list와 연결
window.onload = function() {
    const savedList = JSON.parse(localStorage.getItem('todos')) || [];
    savedList.forEach((item) => {
        createListElement(item);
    });
};

//요소 추가 코드
addToDo.addEventListener('click',function(){
    var list = document.createElement('li');           //input에 입력한 내용을 li로 만들기
    if (!inputbox.value)                //input에 내용 없으면
        alert('내용이 없습니다!');        //경고 띄우기
    else{                         //내용 있으면
        const text = inputbox.value;
        createListElement(text);
        saveToLocalstorage(text);
        inputbox.value = '';
    }
})

//엔터키 입력 추가 코드
inputbox.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        addToDo.click();
    }
})

//list 내용 만들기
function createListElement(text) {
    const list = document.createElement('li');
    list.innerText = text;
    todolist.appendChild(list);

    list.addEventListener('click',function(){  //한 번 클릭하면 요소에 가로줄 추가
        list.style.textDecoration = 'line-through';
    })

    list.addEventListener('dblclick',function(){  //두 번 클릭하면 요소 제거
        todolist.removeChild(list);
        removeFromLocalstorage(text);
    })
}

//localstorage에 요소 저장
function saveToLocalstorage(item){
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(item);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//요소 제거
function removeFromLocalstorage(item){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todos => todos !== item);
    localStorage.setItem('todos', JSON.stringify(todos));
}