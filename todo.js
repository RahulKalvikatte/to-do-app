
let toDoList=[];
todoDisplay();


function addtoDo(){
    
    let inputElement=document.querySelector('#todoitem');
    let dueDate=document.querySelector('#dueDate');
    
    let TodoItem=inputElement.value;
    let todoDate=dueDate.value;
        toDoList.push({item:TodoItem,duedate:todoDate});
        inputElement.value='';
        dueDate.value='';
        todoDisplay();


}



function todoDisplay(){
    let DisplayContainer=document.querySelector('.display-container');

    let newHtml='';
    

    for(let i=0;i<toDoList.length;i++){
        
        let {item,duedate}=toDoList[i];

        newHtml+=`
           <span id="display">${item}</span>
           <span id="display">${duedate}</span>
           <button id="delete-btn" onclick="toDoList.splice(${i}, 1);
           todoDisplay();">delete</button>
        `
        
    }
    DisplayContainer.innerHTML=newHtml;   

}