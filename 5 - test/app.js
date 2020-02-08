const modal = document.querySelector("exampleModal");
const btnModal = document.querySelector("#myBtn");
btnModal.addEventListener("click2", openModal);
function openModal() {
    modal.style.display = "block";
}

//======================== GetTodoFromModal
$('#form').on('submit', function (e) {
    const whatTodo = form.name.value;
    if (whatTodo == "") {
        alert("Please provide your name!");
        form.name.focus();
    } else {
        let newTodo = whatTodo.trim();
        if (newTodo != "") {
            todoList.push(newTodo);
            createACard(newTodo, "todoList");
            whatTodo.value = "";
        }
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    $("#exampleModal").modal('hide');
    e.preventDefault();
});

const todoCart = document.querySelector("#todo");
const doingCart = document.querySelector("#doing");
const doneCart = document.querySelector("#done");

let todoList = getTodosFromStorage("todoList");
let doingList = getTodosFromStorage("doingList");
let doneList = getTodosFromStorage("doneList");

//======================== CreateCard
function createACard(a, type) {
    // Create a card
    const cardItem = document.createElement("div");
    cardItem.className = "card shadow-sm bg-white rounded";
    cardItem.style = "margin-bottom: 20px;";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";

    const cardRow = document.createElement("div");
    cardRow.className = "row";

    const cardCol = document.createElement("div");
    cardCol.className = "col";
    const cardCol2 = document.createElement("div");
    cardCol2.className = "col";

    const span = document.createElement("span");
    span.className = "bg-primary text-white rounded-lg display-5";
    let title = "ReactJS";
    span.textContent = title;
    cardCol.appendChild(span);

    const aEdit = document.createElement("a");
    aEdit.className = "font-weight-bold";
    aEdit.style = "float :right;";
    aEdit.innerHTML = "<i class='glyphicon glyphicon-pencil text-success px-md-5'></i>";
    const aOk = document.createElement("a");
    aOk.className = "font-weight-bold";
    aOk.style = "float :right;";
    aOk.id = "fromTodoToDoing";
    aOk.innerHTML = "<i class='glyphicon glyphicon-ok text-danger'></i>";

    cardCol2.appendChild(aOk);
    cardCol2.appendChild(aEdit);

    const x = document.createElement("div");
    x.id = "todoX";
    let sert = a;
    const x1 = document.createElement("span");
    x1.id = "span";
    x1.className = "card-text";
    x1.textContent = sert;
    x.appendChild(x1);

    cardRow.appendChild(cardCol);
    cardRow.appendChild(cardCol2);
    cardTitle.appendChild(cardRow);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(x);

    cardItem.appendChild(cardBody);

    switch (type) {
        case "todoList": todoCart.appendChild(cardItem); break;
        case "doingList": doingCart.appendChild(cardItem); break;
        case "doneList": doneCart.appendChild(cardItem); break;
    }

}

//======================== FromTodoToDoing
const fromTodoToDoing = document.querySelector("#todo");
fromTodoToDoing.addEventListener("click", fTTD);
function fTTD(e) {
    if (e.target.className === "glyphicon glyphicon-ok text-danger") {
        let todoData = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#span").textContent;
        let todoTitle = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent;

        if (todoData != "") {
            doingList.push(todoData);
            createACard(todoData, "doingList")
        }
        localStorage.setItem("doingList", JSON.stringify(doingList));

        xJson = JSON.parse(localStorage.getItem("todoList"));
        xJson.splice(xJson.indexOf(todoData), 1);
        localStorage.removeItem('todoList');
        localStorage.setItem("todoList", JSON.stringify(xJson));

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

//======================== FromDoingToDone
const fromDoingToDone = document.querySelector("#doing");
fromDoingToDone.addEventListener("click", fDTD);
function fDTD(e) {
    if (e.target.className === "glyphicon glyphicon-ok text-danger") {
        let doingData = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#span").textContent;
        let todoTitle = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent;

        if (doingData != "") {
            doneList.push(doingData);
            createACard(doingData, "doneList")
        }
        localStorage.setItem("doneList", JSON.stringify(doneList));

        xJson = JSON.parse(localStorage.getItem("doingList"));
        xJson.splice(xJson.indexOf(doingData), 1);
        localStorage.removeItem('doingList');
        localStorage.setItem("doingList", JSON.stringify(xJson));

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

//======================== FromDoneToTrash
const fromDoneToTrash = document.querySelector("#done");
fromDoneToTrash.addEventListener("click", fDTT);
function fDTT(e) {
    if (e.target.className === "glyphicon glyphicon-ok text-danger") {
        let doneData = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#span").textContent;
        let doneTitle = e.target.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent;

        xJson = JSON.parse(localStorage.getItem("doneList"));
        xJson.splice(xJson.indexOf(doneData), 1);
        localStorage.removeItem('doneList');
        localStorage.setItem("doneList", JSON.stringify(xJson));

        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

//====================================== FromLocalStorageToCard
function getTodosFromStorage(y) {
    let x = [];
    if (localStorage.getItem(y) != null) {
        x = JSON.parse(localStorage.getItem(y));
        x.forEach(function (i) {
            createACard(i, y);
        });
    }
    return x;
};

//===================================== ClearAllListsAndStorage
const clearAll = document.querySelector("#clear-all");
function clearAllTodos(e) {
    if (confirm("Tümünü silmek istediğinizden emin misiniz?")) {
        while (todoCart.firstElementChild != null) {
            todoCart.removeChild(todoCart.firstElementChild);
        }
        localStorage.removeItem("todoList");
        localStorage.removeItem("doingList");
        localStorage.removeItem("doneList");
    }
}