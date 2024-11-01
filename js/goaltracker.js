
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        //document.getElementById("errorPopup").innerHTML = "You must add some goals!";
        showError();
    } else {
        let li=document.createElement("li");
        li.classList.add('unchecked');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="Achieved"
        li.appendChild(span);
        //document.getElementById("errorPopup").innerHTML = "";
    }
    inputBox.value="";
    saveData();
}

function showError(){
    document.getElementById('errorPopup').style.display = 'block';
}
function closeError(){
    document.getElementById('errorPopup').style.display = 'none';
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){      
        saveData();
    } else if(e.target.tagName=="SPAN"){
        e.target.classList.toggle("checked");
        showConfirmationPopup();
        e.target.parentElement.remove();
        saveData();
    }
},false);

function showConfirmationPopup(){
    document.getElementById('confirmationPopup').style.display = 'block';
}
function closeConfirmationPopup(){
    document.getElementById('confirmationPopup').style.display = 'none';
}

function saveData(){
    localStorage.setItem("goalData",listContainer.innerHTML)
}

function displayGoals(){
    listContainer.innerHTML=localStorage.getItem("goalData");
}
displayGoals();
