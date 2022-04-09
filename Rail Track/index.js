let get = (item) => document.querySelectorAll(item);
let take =(item) => document.querySelector(item);

let inputHolder = get("input");
let buttonHolder = take("button");
let error = get(".display-error");
let messageHolder = get(".message")


console.log(" do na")

function same() {
    console.log("print out")
    if (inputHolder[2].value === inputHolder[3].value) {
error.classList.add("hide")
    }
    else{
messageHolder.innerText ="incorrect Password"
            
        }
}

buttonHolder.addEventListener("click", () =>{
    console.log(inputHolder[0].value);
    console.log(inputHolder[1].value);
    console.log(inputHolder[2].value);
    console.log(inputHolder[3].value);
    same();
    

});

