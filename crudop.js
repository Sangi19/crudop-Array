const lunch=["rice","wheat","curd","a", "b","c"]
const ulList=document.getElementById('ulList')
let currentIndex=""

function showAllElements(){
    ulList.innerHTML=""
    lunch.map((item,index) =>showItem(item,index))
}

showAllElements()
function showItem(item,index) 
{          
    const divEl=document.createElement('div');
    const editBtn=document.createElement('button');
    editBtn.innerHTML="Edit"
        editBtn.onclick=function() {
            editEl=document.getElementById('input')
            editEl.value=item;
            currentIndex=index
        }
    const deleteBtn=document.createElement('button');        
        deleteBtn.innerHTML="Delete"
        deleteBtn.onclick=function() 
        {
            currentIndex=index
            if (currentIndex > -1) { // only splice array when item is found
                console.log(index) 
                lunch.splice(currentIndex, 1); // 2nd parameter means remove one item only
                }
                showAllElements()
        }

    divEl.innerHTML=item;
    divEl.appendChild(editBtn);
    divEl.appendChild(deleteBtn);
    ulList.appendChild(divEl)
    currentIndex=""
}

function addli() 
{  
    ulList.innerHTML=""
    const input = document.getElementById("input")   
    if(input.value.trim() !="")
    {
        lunch.push(input.value);
        showAllElements()        
    }else{
        alert("Enter the any item")
        showAllElements()
    } 
    input.value=""
}

function update(){
    const input = document.getElementById("input")
    lunch[currentIndex]=input.value;
    showAllElements()
    currentIndex=""
    input.value=""

    
}

function randomOne() {
    const pTag= document.getElementById('pTag1');
    console.log(Math.floor(Math.random()*lunch.length))
    pTag.innerHTML=lunch[Math.floor(Math.random()*lunch.length)]
}