const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let addTask = () => {
    if(inputBox.value === ''){
        alert("Please enter a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  

       let span = document.createElement("span");
         span.innerHTML = "\u00d7";
            span.setAttribute("class", "close");
            li.appendChild(span);
            span.onclick = () => {
                li.style.display = "none";
            }

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.style.display = "none";
    }
}, false);



// This code saves the data to the local storage
let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

// This code shows the data from the local storage
let showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();














