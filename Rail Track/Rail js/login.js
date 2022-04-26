let get = (item) => document.querySelectorAll(item);
let take = (item) => document.querySelector(item);

let error = take(".message");
let inputHolder = get("input");
let buttonHolder = take("button");

function display(e) { e.preventDefault()
    if (inputHolder[0].value === inputHolder[1].value ) {
        error.innerText = "";
        location.href="http://127.0.0.1:5500/Rail%20Track/Homepage index.html"
        
    
    }else{
        error.innerText = "incorrect login details";
    }
    
}

buttonHolder.addEventListener("click", display)

console.log(location)