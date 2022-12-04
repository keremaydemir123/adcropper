const template = document.getElementsByTagName("template")[0];

const comboBox = document.getElementById("combo-box");
const comboBoxArrow = document.querySelector(".combo-arrow");
const comboBoxOptions = document.querySelector(".options");

const loginText = document.querySelector(".login-text");
const divContainerRight = document.querySelector(".div-container__right");

const radioDiv = document.querySelectorAll(".radio");
const checkboxDiv = document.querySelectorAll(".checkbox");

const calendarBox = document.querySelector(".calendar-box");
const calendarOpenArrow = document.querySelector(".fa-chevron-down");
const calendarArrowBox = document.querySelector(".arrow-box");

// Div Container

loginText.addEventListener("click", () => {
  divContainerRight.firstElementChild.querySelector("input").focus();
});

// Combo Box

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
];

const wrapper = comboBox.querySelector(".wrapper");

wrapper.addEventListener("click", () => {
  comboBoxOptions.classList.toggle("show");
  if (comboBoxArrow.classList.contains("fa-chevron-down")) {
    comboBoxArrow.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    comboBoxArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
});

for (let i = 0; i < options.length; i++) {
  const option = document.createElement("li");
  option.className = "option";
  option.innerText = options[i];
  comboBoxOptions.append(option);
}

// Radio

radioDiv.forEach((div) => {
  div.addEventListener("click", () => {
    if (!div.classList.contains("disabled")) {
      div.classList.toggle("checked");
    }
  });
});

// Checkbox

checkboxDiv.forEach((div) => {
  div.addEventListener("click", () => {
    if (!div.classList.contains("disabled")) {
      div.classList.toggle("checked");
      if (div.classList.contains("checked")) {
        div.querySelector("i").className = "fa-solid fa-check";
      } else {
        div.querySelector("i").className = "";
      }
    }
  });
});

// Calendar

for (let i = 0; i < 31; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.innerText = i + 1;
  calendarBox.append(day);
}

calendarOpenArrow.addEventListener("click", (e) => {
  calendarBox.classList.toggle("show");
  if (calendarOpenArrow.classList.contains("fa-chevron-down")) {
    calendarOpenArrow.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    calendarOpenArrow.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
  calendarArrowBox.classList.toggle("show");
  e.stopPropagation();
});
