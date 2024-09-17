

const names = [
    "Alice", "James", "Ann","Sam", "Vick","James","Mark",
    "Annete", "Joy","Luke", "Viola", "Harry", "Harriet",
    "Annet", "Mike", "Lyon","Hosea", "Marion", "Hanna"
];

let result = document.querySelector("#results");
let nameChar = document.querySelector("#name");
let button = document.querySelector("button");

function searchName(){
    let queryChar = nameChar.value.toLowerCase();
    nameChar.value = "";
    nameChar.focus();
    result.textContent = "";
  
    for(let i = 1; i < names.length; i++){
        let queryName = names[i].toLowerCase();
        if(!(queryName.startsWith(queryChar))){
            continue;
        }
        if(queryChar === ""){
            continue;
        }
        result.textContent += `${names[i]}, \n\n`;
    }
  
    if(result.textContent === ""){
        result.textContent = "Contact not Found!"
    }else{
        result.textContent += "End!";
    }
    
}

button.addEventListener("click", searchName);