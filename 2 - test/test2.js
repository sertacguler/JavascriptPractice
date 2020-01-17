const langs =["Reactjs","Javascript","Java"];

///////////////////////////////////////////////
console.log('%c foreach','color:red;');
langs.forEach(function(lang){
    console.log(lang);
});

///////////////////////////////////////////////
console.log('%c foreach -index','color:orange;');
langs.forEach(function(lang, index){
    console.log(lang , index);
});

langs.forEach(console.log);

///////////////////////////////////////////////
console.log('%c for of','color:green;');
for(const e of langs){
    console.log(e);
}

///////////////////////////////////////////////
console.log('%c console Array','color:gray;');
console.log({langs});

///////////////////////////////////////////////
console.log('%c console Table','color:purple;');
console.table([langs]);

///////////////////////////////////////////////
console.log('%c console Object only Names','color:purple;');
const users = [
    {name:"Sertac",age:28},
    {name:"Celal",age:30},
    {name:"Yusuf",age:23},
    {name:"Sefa",age:22}
]

const names = users.map(user=> console.log(user.name));

const ages = users.map(function(user){
    return user.age;
});

console.log(ages);

///////////////////////////////////////////////
console.log('%c console Object','color:purple;');
const user = {name:"SERTAC", age:28};

for(let key in user){
    console.log(key,"->",user[key]);
};

///////////////////////////////////////////////
console.log('%c Question yes or no','color:purple;');
const cevap = confirm("Emin misiniz?");

if(cevap){ // true or false
    console.log("cevap true"); 
} else{
    console.log("cevap false"); 
}

///////////////////////////////////////////////
console.log('%c prompt','color:purple;');
console.log(prompt("sayı girin"));

///////////////////////////////////////////////
var value1 = 10;
let value2 = 20;
const value3 = 30;

function func(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    
    console.log(value1, value2, value3);
}

func();

console.log(value1, value2, value3);

///////////////////////////////////////////////
if(true){
var a = 1;
let b = 2;
const c = 3;
}

console.log(a); // var ekrana yazıldı diğerleri yazmadı
console.log(b);
console.log(c);