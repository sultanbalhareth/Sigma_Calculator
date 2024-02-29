// Get the final result div to control the final result value
let finalResult = document.getElementsByClassName("real-result")[0];
// Get the Operational Result
let operationalResult =
  document.getElementsByClassName("operational-result")[0];
// Get all the buttons as an array
let buttons = document.querySelectorAll(".body div");

let flag = false; // to indecate wethere to reset the finalresult or add next to it a number

let flag2 = false; // for some operation handling (equal function)

// Clear Button Function

buttons[0].onclick = () => {
  finalResult.textContent =0;
  operationalResult.textContent = "";
  flag = false;
  flag2 = false;
};

// Delete One Digit Function

buttons[1].onclick = () => {
  // Terniary  operator
  let finalResultArray = finalResult.textContent.split("");
  if (finalResult.textContent.length > 1) {
    finalResultArray.pop();
    finalResult.textContent = finalResultArray.join("");
  } else {
    finalResult.textContent = 0;
  }
};

// Percentage Operation Function

buttons[2].onclick = () => {
  if (finalResult.textContent != "0" && finalResult.textContent.length < 16) {
    finalResult.textContent = parseFloat(finalResult.textContent) / 100;
  }
};

let sign; // to detect the sign of the conducted operator automatically

// Sign Operaion Function

function operationsFunction(mathOperator) {
  flag2 = false;
  // finalResult.textContent += ".";
  if (finalResult.textContent[finalResult.textContent.length - 1] == ".") {
    finalResult.textContent += 0;
    operationalResult.textContent =
      finalResult.textContent + " " + mathOperator;
    flag = false;
    sign = mathOperator;
  } else if(isNaN(finalResult.textContent) === true){
  } else {
    operationalResult.textContent =
      finalResult.textContent + " " + mathOperator;
    flag = false;
    sign = mathOperator;
  }
}

// Dot Operator Function

buttons[16].onclick = function () {
  if (
    !finalResult.textContent.includes(".") &&
    finalResult.textContent.length < 16
  ) {
    finalResult.textContent += ".";
  }
};

// Numbers function (DONE!)
function numbersFunction(number) {
  if (finalResult.textContent == "0") {
    finalResult.textContent = parseFloat(buttons[number].textContent);
  } else if (finalResult.textContent != "0") {
    if (flag === false && operationalResult.textContent.includes(sign)) {
      finalResult.textContent = parseFloat(buttons[number].textContent);
      flag = true;
    } else {
      if (finalResult.textContent.length < 16) {
        finalResult.textContent += buttons[number].textContent;
        finalResult.textContent = parseFloat(finalResult.textContent);
      }
    }
  }
}


// Equal Operation Function

buttons[19].onclick = () => {

  if(flag2 === false){
    if((finalResult.textContent[finalResult.textContent.length - 1] === "." || !isNaN(parseFloat(finalResult.textContent[finalResult.textContent.length - 1]))) && !operationalResult.textContent.includes(sign)){
      finalResult.textContent = parseFloat(finalResult.textContent);
      operationalResult.textContent =  finalResult.textContent + ' =';
      
    }else{
    operationalResult.textContent =
    operationalResult.textContent + " " + finalResult.textContent + ' =';
    let twoNumbers = operationalResult.textContent.split(` ${sign} `);
    switch (sign) {
      case "-":
        finalResult.textContent =
          parseFloat(twoNumbers[0]) - parseFloat(twoNumbers[1]);
        break;
      case "+":
          finalResult.textContent =
          parseFloat(twoNumbers[0]) + parseFloat(twoNumbers[1]);
        break;
      case "×":
        finalResult.textContent =
          parseFloat(twoNumbers[0]) * parseFloat(twoNumbers[1]);
        break;
      case "÷":
        finalResult.textContent =
          parseFloat(twoNumbers[0]) / parseFloat(twoNumbers[1]);
        break;

  }
  flag2 = true;
}}else if(flag2 === true){
  let twoNumbers = operationalResult.textContent.split(` ${sign} `);
  switch (sign) {
    case "-":
      finalResult.textContent = parseFloat(finalResult.textContent) - parseFloat(twoNumbers[1]);
      operationalResult.textContent = finalResult.textContent + ' - ' + twoNumbers[1];
      break;
    case "+":
      finalResult.textContent = parseFloat(finalResult.textContent) + parseFloat(twoNumbers[1]);
      operationalResult.textContent = finalResult.textContent + ' + ' + twoNumbers[1];
      break;
    case "×":
      finalResult.textContent = parseFloat(finalResult.textContent) * parseFloat(twoNumbers[1]);
      operationalResult.textContent = finalResult.textContent + ' × ' + twoNumbers[1];
      break;
    case "÷":
      finalResult.textContent = parseFloat(finalResult.textContent) / parseFloat(twoNumbers[1]);
      operationalResult.textContent = finalResult.textContent + ' ÷ ' + twoNumbers[1] ;
      break;
}
}
};


// Dark Mode Function and Settings 


let DarkMode;

let getNavMove = document.querySelector('.dark-light-modes');
let getFooter = document.querySelector('footer');
let getUpperBodyOfCalc = document.querySelector('header');
let getLowerBodyOfCalc = document.querySelector('.body');
let getBody = document.querySelector('body');


// Dark Mode Function

let getDarkModeButton = document.querySelector('.dark-mode-icon');
let showPop = true;
let getSubFrame = document.querySelector('.sub-frame');
let getModesInSmallScreensDivs = document.querySelector('.dark-light-mode-mobile');
getDarkModeButton.onclick = ()=>{
  DarkMode = true;
  if(showPop === true){
  Swal.fire({
    text: '" Dark mode has been suggested by a lovely person 🤍 "',
    showConfirmButton: false,
    
  });
  showPop = false;
}

  getNavMove.style.backgroundColor = 'rgb(11, 38, 57)';
  getFooter.style.backgroundColor = 'rgb(11, 38, 57)';
  getUpperBodyOfCalc.style.backgroundColor = 'rgb(11, 38, 57)';
  getUpperBodyOfCalc.style.color = 'white';
  getLowerBodyOfCalc.style.backgroundColor = 'rgb(11, 38, 57)';
  getBody.style.backgroundColor = 'rgb(75, 84, 94)';
  for(let i = 0; i < getLowerBodyOfCalc.children.length;i++){
    getLowerBodyOfCalc.children[i].style.color='white';
  }

};

getModesInSmallScreensDivs.children[0].onclick = function(){
  DarkMode = true;
  if(showPop === true){
    Swal.fire({
      text: '" Dark mode has been suggested by a lovely person 🤍 "',
      showConfirmButton: false,
      
    });
    showPop = false;
  }
  getModesInSmallScreensDivs.children[0].style.backgroundColor = 'rgb(11, 38, 57)';
  getModesInSmallScreensDivs.children[1].style.backgroundColor = 'rgb(11, 38, 57)';
    getNavMove.style.backgroundColor = 'rgb(11, 38, 57)';
    getFooter.style.backgroundColor = 'rgb(11, 38, 57)';
    getUpperBodyOfCalc.style.backgroundColor = 'rgb(11, 38, 57)';
    getUpperBodyOfCalc.style.color = 'white';
    getLowerBodyOfCalc.style.backgroundColor = 'rgb(11, 38, 57)';
    getBody.style.backgroundColor = 'rgb(75, 84, 94)';
    for(let i = 0; i < getLowerBodyOfCalc.children.length;i++){
      getLowerBodyOfCalc.children[i].style.color='white';
    }

};

// Light Mode Functions for big screens

let getLightModeButton = document.getElementsByClassName('light-mode-icon')[0];
let getDivss = document.querySelectorAll('.body div');
getLightModeButton.onclick = function(){
  DarkMode = false;
  getNavMove.style.backgroundColor = '#0F94F8';
  getFooter.style.backgroundColor = '#0F94F8';
  getUpperBodyOfCalc.style.backgroundColor = 'rgb(242, 242, 244)';
  getUpperBodyOfCalc.style.color = 'black';
  getLowerBodyOfCalc.style.backgroundColor = 'rgb(253, 253, 253)';
  getBody.style.backgroundColor = 'white';
  getDivss[0].style.color = '#DD774F';
  getDivss[1].style.color = '#0F94F8';
  getDivss[2].style.color = '#0F94F8';
  getDivss[3].style.color = '#0F94F8';
  getDivss[4].style.color = 'black';
  getDivss[5].style.color = 'black';
  getDivss[6].style.color = 'black';
  getDivss[7].style.color = '#0F94F8';
  getDivss[8].style.color = 'black';
  getDivss[9].style.color = 'black';
  getDivss[10].style.color = 'black';
  getDivss[11].style.color = '#0F94F8';
  getDivss[12].style.color = 'black';
  getDivss[13].style.color = 'black';
  getDivss[14].style.color = 'black';
  getDivss[15].style.color = '#0F94F8';
  getDivss[16].style.color = 'black';
  getDivss[17].style.color = 'black';
};


// Light Mode Function for mobile screens

// Light Mode Functions


getModesInSmallScreensDivs.children[1].onclick = function(){
  DarkMode = false;
  getNavMove.style.backgroundColor = '#0F94F8';
  getFooter.style.backgroundColor = '#0F94F8';
  getModesInSmallScreensDivs.children[0].style.backgroundColor = '#0F94F8';
  getModesInSmallScreensDivs.children[1].style.backgroundColor = '#0F94F8';
  getUpperBodyOfCalc.style.backgroundColor = 'rgb(242, 242, 244)';
  getUpperBodyOfCalc.style.color = 'black';
  getLowerBodyOfCalc.style.backgroundColor = 'rgb(253, 253, 253)';
  getBody.style.backgroundColor = 'white';
  getDivss[0].style.color = '#DD774F';
  getDivss[1].style.color = '#0F94F8';
  getDivss[2].style.color = '#0F94F8';
  getDivss[3].style.color = '#0F94F8';
  getDivss[4].style.color = 'black';
  getDivss[5].style.color = 'black';
  getDivss[6].style.color = 'black';
  getDivss[7].style.color = '#0F94F8';
  getDivss[8].style.color = 'black';
  getDivss[9].style.color = 'black';
  getDivss[10].style.color = 'black';
  getDivss[11].style.color = '#0F94F8';
  getDivss[12].style.color = 'black';
  getDivss[13].style.color = 'black';
  getDivss[14].style.color = 'black';
  getDivss[15].style.color = '#0F94F8';
  getDivss[16].style.color = 'black';
  getDivss[17].style.color = 'black';
};



// I Love You Message


buttons[18].onclick = function () {
  if(DarkMode === true){
  Swal.fire({
    text: '" I Love You ❤️ "',
    showConfirmButton: false,
    background:'black'
  })}else{
      Swal.fire({
        text: '" I Love You ❤️ "',
        showConfirmButton: false,
        background: '#0F94F8'
      })}
  };



