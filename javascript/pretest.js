let showLoginForm = () => {
  const username = document.getElementById("username");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const email = document.getElementById("email");
  const birthday = document.getElementById("birthday");
  const city = document.getElementById("city");
  const comment = document.getElementById("comment");
  const hobbiesEL = document.getElementsByClassName("hobbies");
  const today = new Date();
  const namePattern = /^[a-z_]([a-zA-Z0-9\._]+).{5,20}$/;
  const phonePattern = /^[0-9].{9}$/;
  const hiddenEL = document.getElementById("hidden");
  const outputEL = document.getElementById("output");
  let message = [];
  let birth = new Date(birthday.value);
  let age = Math.floor((today - birth) / 86400000 / 365);
  let hobbies = [];
  let gender = document.querySelector('input[name="gender"]:checked');
  // let gender = $(".gender:checked").val();
  // $(".hobbies:checked").each(function () {
  //   hobbies.push($(this).val());
  // });
  for (i = 0; i < hobbiesEL.length; i++) {
    if (hobbiesEL[i].checked) {
      hobbies.push(hobbiesEL[i].value);
    }
    console.log(hobbies);
  }

  if (age < 17) {
    message.push("Sorry, you are not old enough");
  }
  if (username.value == null || namePattern.test(username.value) == false) {
    message.push("Please enter a valid username");
  }
  if (!phonePattern.test(phone.value)) {
    message.push("Please enter a valid phone number");
  }
  if (city.value === "") {
    message.push("Please select a city");
  }
  if (message.length > 0) {
    outputEL.innerText = message.join("\n");
    hiddenEL.hidden = false;
    return false;
  } else {
    message = [];
    prompt(
      `   Member information
    ----------------------------------
    Name: ${username.value}
    Gender: ${gender.value}
    Hobbies: ${hobbies.join(", ")}
    Birthday: ${birthday.value}
    Address: ${address.value}
    Email: ${email.value}
    Phone: ${phone.value}
    City: ${city.value}
    Comment: ${comment.value}
    `
    );
    return false;
  }
};
