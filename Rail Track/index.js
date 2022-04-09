let get = (item) => document.querySelectorAll(item);
let take = (item) => document.querySelector(item);

let inputHolder = get("input");
let buttonHolder = take("button");
let error = get(".display-error");
let messageHolder = take(".message");

console.log(" do na");

async function same(data) {
  console.log("print out");
  if (data.password === data.confirmPassword) {
    error.classList.add("hide");
    const resp = await fetch("/url", {
      method: "POST",
      body: data,
    });
  } else {
    messageHolder.innerText = "incorrect Password";
  }
}

buttonHolder.addEventListener("click", (e) => {
  e.preventDefault();
  let fullName = inputHolder[0].value;
  let email = inputHolder[1].value;
  let password = inputHolder[2].value;
  let confirmPassword = inputHolder[3].value;
  const data = { fullName, email, password, confirmPassword };
  console.log(data);
  same(data);
});
