window.onload = (event) => {

    let uli = [];
    if (localStorage.getItem("AllOfTheWordsOk") != null) {
        uli = JSON.parse(localStorage.getItem("AllOfTheWordsOk")) || [];
    }

    uli.forEach(element => {
        createACard(element);
    });

};

const todoCart = document.getElementById("todo");

//======================== CreateCard
function createACard(element) {
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
    let title = element.mean;
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
    let sert = element.word;
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

    todoCart.appendChild(cardItem);

}

/*
                Yarın

*/