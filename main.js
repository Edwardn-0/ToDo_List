const inputbox = document.getElementById('todo-input'); //입력 상자 만들기
const addToDo = document.getElementById('todo-add');    //요소 추가
const todolist = document.getElementById('todo-list');  //목록에 추가

//요소 추가 코드
addToDo.addEventListener('click',function(){
    var list = document.createElement('li');           //input에 입력한 내용을 li로 만들기
    if (!inputbox.value)                //input에 내용 없으면
        alert('내용이 없습니다!');        //경고 띄우기
    else                         //내용 있으면
    {
        list.innerText = inputbox.value;  //목록에 요소 추가
        todolist.appendChild(list);
        inputbox.value='';
    }

    list.addEventListener('click',function(){  //한 번 클릭하면 요소에 가로줄 추가
        list.style.textDecoration = 'line-through';
    })

    list.addEventListener('dblclick',function(){  //두 번 클릭하면 요소 제거
        todolist.removeChild(list);
    })
})

//엔터키 입력 추가 코드
inputbox.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        addToDo.click();
    }
})