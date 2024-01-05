let y = "Hello world";
console.log(y);

y = "Hello IC Stars";
console.log(y);

console.log(y === "Hello IC Stars");

let x;

document.addEventListener("click", (e) => {
  console.log("You have clicked anywhere in the document.");
});

const grabFirstnameInput = document.getElementById("firstNameInput");
console.log(grabFirstnameInput);

const grabBirthPlaceInput = document.getElementById("birthPlaceInput");
console.log(grabBirthPlaceInput);

const grabColorInput = document.getElementById("colorInput");
console.log(grabColorInput);

const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("this is the LIKE button");
  console.log(grabFirstnameInput.value);
  console.log(grabBirthPlaceInput.value);
  console.log(grabColorInput.value);

  const paragraphElement = document.querySelector(".paragraph");
  console.log(paragraphElement);

  paragraphElement.textContent = `${grabFirstnameInput.value} born in ${grabBirthPlaceInput.value} your favortie color is ${grabColorInput.value}. Thank you for liking me.`;

  // When we click the like button the paragraph will appear*//
  //Isaiah Furquan, your birthday is 02/07/1994. Thank you for liking me.*//

  // console.log(`${} ${} your birthday is ${}. Thank you for liking me.`)

  console.log(
    `${grabFirstnameInput.value} ${grabBirthPlaceInput.value} your favorite color is ${grabColorInput.value}. Thank you for giving me your location.`
  );

  const grabFirstnameInput = document.getElementById("firstNameInput");
  grabFirstnameInput.style.color = "purple";
});
