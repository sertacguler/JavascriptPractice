window.onload = (event) => {
    document.getElementById("sentence").disabled = true; // kelime belli olmadığı için disabled oldular 
    document.getElementById("btn_add_sentences").disabled = true;

    let allWords = [];
    if (localStorage.getItem("Memorize") != null) {
        allWords = JSON.parse(localStorage.getItem("Memorize"));
    } else {
        document.getElementById("asdf").style.visibility = "hidden";
        document.getElementById("allofwordok").style.visibility = "hidden";
    }
    allWords.forEach(element => {
        card(element);
    });

};

function allwordsOk() {
    if (confirm("Herşey yolundamı?")) {
        allWords = [];
        allWords = JSON.parse(localStorage.getItem("Memorize"));
        let aa = JSON.parse(localStorage.getItem("AllOfTheWordsOk")) || [];

        allWords.forEach(element => {
            aa.push(element);
        });
        localStorage.setItem("AllOfTheWordsOk", JSON.stringify(aa));

        const wordElements = document.getElementById("asdf");
        while (wordElements.firstElementChild != null) {
            wordElements.removeChild(wordElements.firstElementChild);
        }
        localStorage.removeItem("Memorize");
        document.getElementById("asdf").style.visibility = "hidden";
        document.getElementById("allofwordok").style.visibility = "hidden";
    }
}

function allwords() {
    window.location = 'newpage.html';
}

function modalOpen() {
    $('[data-toggle="popover"]').popover();
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
}

let threeSentence = 0;
let sentences = [];
const x = { "word": "", "sentence": [], "mean": "" };

function btn_add_words() {
    const btn_word = document.getElementById("btn_add_words");

    if (btn_word.textContent.trim() === "New Word") {
        if (!(document.getElementById("word").value.length >= 2 && document.getElementById("wordsmean").value.length <= 35)) {
            const letter = document.createElement("small");
            letter.textContent = "Must be 2-35 characters long.";
            letter.className = "text-danger";
            const di = document.getElementById("wordlettercheck");
            di.appendChild(letter);
            setTimeout(function () { letter.remove(); }, 3000);

        } else {
            btn_word.textContent = "Change Word"; // kelimeyi değiştirmek için
            document.getElementById("word").disabled = true; // kelimeyi değiştiremesin değiştirmek için "Change Word" butonuna bassın
            document.getElementById("wordsmean").disabled = true;
            document.getElementById("sentence").disabled = false; // üstte seçilen kelime için cümle girilsin diye aktif oldular
            document.getElementById("btn_add_sentences").disabled = false;
            x.word = document.querySelector("#word").value; // Json a koydum word ü
            x.mean = document.querySelector("#wordsmean").value;

        }
    } else {
        if (document.getElementById("sentence").value != null) {
            document.querySelector("#word").value = "";
            document.getElementById("wordsmean").value = "";
            document.getElementById("sentence").value = "";
            btn_word.textContent = "New Word"; // kelimeyi değiştirmek için
            document.getElementById("word").disabled = false; // kelimeyi değiştiremesin değiştirmek için "Change Word" butonuna bassın
            document.getElementById("wordsmean").disabled = false;
            document.getElementById("sentence").disabled = true; // kelime belli olmadığı için disabled oldular 
            document.getElementById("btn_add_sentences").disabled = true;

            let allWords = [];
            if (localStorage.getItem("Memorize") != null) {
                allWords = JSON.parse(localStorage.getItem("Memorize"));
            }
            x.sentence = sentences; // diziyi tekrar x jsonuna konuyor
            allWords.push(x);
            card(x);
            localStorage.setItem("Memorize", JSON.stringify(allWords));
            sentences = [];
        } else {
            const letter = document.createElement("small");
            letter.textContent = "Must be 2-35 characters long.";
            letter.className = "text-danger";
            document.getElementById("sentencenullcheck").appendChild(letter);
        }
    }
};

function btn_add_sentences() {
    sentences.push(document.getElementById("sentence").value); // input a girdiklerş diziye konuyor
    document.querySelector("#sentence").value = "";

    if (sentences.length > 4) {
        btn_add_words();
    }
};

function card(element) {
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

    const span = document.createElement("h4");
    //span.className = "bg-primary text-white rounded-lg display-5";
    span.className = "rounded-lg display-5";
    span.textContent = element.word.charAt(0).toUpperCase() + element.word.slice(1)
    cardCol.appendChild(span);
    cardCol.appendChild(document.createElement("hr"));

    const aOk = document.createElement("a");
    aOk.id = "myBtn";
    aOk.setAttribute("data-toggle", "popover");
    aOk.setAttribute("data-content", element.mean);
    aOk.setAttribute("title", element.word.charAt(0).toUpperCase() + element.word.slice(1));
    aOk.setAttribute("data-trigger", "focus");
    aOk.setAttribute("tabindex", "0"); // bu ve üsteki gerekli focus için

    aOk.onclick = function () { modalOpen() };

    aOk.className = "font-weight-bold dropdown";
    aOk.style = "float :right;";
    const i = document.createElement("i");
    i.className = "fas fa-align-left fa-lg";
    i.style = "color:#99004C;";
    aOk.appendChild(i);
    cardCol2.appendChild(aOk);

    const x = document.createElement("div");
    x.id = "todoX";
    x.className = "px-md-5";
    const x1 = document.createElement("p");
    const x2 = document.createElement("p");
    const x3 = document.createElement("p");

    x1.textContent = element.sentence[0];
    x2.textContent = element.sentence[1];
    x3.textContent = element.sentence[2];

    const y1 = document.createElement("div");
    y1.className = "shadow-sm bg-light text-black rounded-lg display-5 px-md-3";
    const y2 = document.createElement("div");
    y2.className = "shadow-sm bg-light text-black rounded-lg display-5 px-md-3";
    const y3 = document.createElement("div");
    y3.className = "shadow-sm bg-light text-black rounded-lg display-5 px-md-3";
    const y4 = document.createElement("div");
    y4.className = "shadow-sm bg-light text-black rounded-lg display-5 px-md-3";
    const y5 = document.createElement("div");
    y5.className = "shadow-sm bg-light text-black rounded-lg display-5 px-md-3";

    if (sentence.size > 3) {
        const x4 = document.createElement("p");
        const x5 = document.createElement("p");
        x4.textContent = element.sentence[3];
        x5.textContent = element.sentence[4];
        y4.appendChild(x4);
        y5.appendChild(x5);
    }
    y1.appendChild(x1);
    y2.appendChild(x2);
    y3.appendChild(x3);

    x.appendChild(y1);
    x.appendChild(y2);
    x.appendChild(y3);
    x.appendChild(y4);
    x.appendChild(y5);

    cardRow.appendChild(cardCol);
    cardRow.appendChild(cardCol2);
    cardTitle.appendChild(cardRow);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(x);

    cardItem.appendChild(cardBody);

    document.getElementById("asdf").style.visibility = "visible";
    document.getElementById("allofwordok").style.visibility = "visible";
    document.getElementById("asdf").appendChild(cardItem);

}
