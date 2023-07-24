//get the buttons and divs for filling
let depositeH3El = document.querySelector("#option1")
let WithdrawH3El = document.querySelector("#option2")
let CheckH3El = document.querySelector("#option3")
let changePinEl = document.querySelector("#option4")
let createRecipeEl = document.querySelector("#option5")
let QuitH4El = document.querySelector("#option6")
let dBtn = document.querySelector("#opbut1")
let wBtn = document.querySelector("#opbut2")
let cBtn = document.querySelector("#opbut3")
let pBtn = document.querySelector("#opbut4")
let rBtn = document.querySelector("#opbut5")
let qBtn = document.querySelector("#opbut6")
let cancelBtn = document.querySelector("#cancel")
let clearBtn = document.querySelector(".clear")
let dBtnInput
let withdrawInput
let pincodeInputEl
let dBtnState
let wBtnState = false
let cBtnState = false
let pBtnState = false
let rBtnState = false
let qBtnState = false
let card = document.querySelector("#card")

//3 users for test
const usersData = [
    { name: 'AVI COHEN', pin: 1111, amount: 1000},
    { name: 'DANIEL LEVY', pin: 1234, amount: 2000},
    { Name: 'YAIR AMAR', pin: 1000, amount: 3000},
  ];
localStorage.setItem("users", JSON.stringify(usersData));

//welcome function greets random user and gets his pincode
function welcome(){
    content.innerHTML ='<h2>PLEASE ENTER YOUR PINCODE<br>AND THEN PRESS CARD.</h2><input id="pincode" type=number max="9999">'
    pincodeInputEl = document.querySelector("#pincode")
    
};
//checks if pin matches users
function checkPin(){
    if(pincodeInputEl.value == 1111){
        content.innerHTML = ""
        content.innerHTML = `<h2>WELCOME ${usersData[0].name}!<br>WHAT WOULD YOU LIKE TO DO TODAY?.</h2>>`
        fullMenu()
    }
    else if(pincodeInputEl.value == 1234){
        content.innerHTML = ""
        content.innerHTML = `<h2>WELCOME ${usersData[1].name}!<br>WHAT WOULD YOU LIKE TO DO TODAY?.</h2>>`
        fullMenu()
    }
    else if(pincodeInputEl.value == 1000){
        content.innerHTML = ""
        content.innerHTML = `<h2>WELCOME ${usersData[2].name}!<br>WHAT WOULD YOU LIKE TO DO TODAY?.</h2>>`
        fullMenu()
    }else
        alert("PINCODE NOT CORRECT")

}
//print full menu text
function fullMenu(){
    depositeH3El.innerHTML = "Press button d to Deposite Money"
    WithdrawH3El.innerHTML = "Press button w to Withdraw Money"
    CheckH3El.innerHTML = "Press button c to Check your Balace"
    changePinEl.innerHTML = "Press button p to change PIN_CODE"
    createRecipeEl.innerHTML = "Press button R to create RECIPE"
    QuitH4El.innerHTML = "Press button q to Quit"
    dBtnState = true
    wBtnState = true
    cBtnState = true
    pBtnState = true
    rBtnState = false
    qBtnState = true
        
}
        


//print empty menu text
function emptyMenu(){
    depositeH3El.innerHTML = ""
    WithdrawH3El.innerHTML = ""
    CheckH3El.innerHTML = ""
    changePinEl.innerHTML = ""
    createRecipeEl.innerHTML = ""
    QuitH4El.innerHTML = ""
    cBtnState = true

}
//insert card on click and go to function check pin
function insertCard(){
    card.style.animationName ='example';
    card.style.animationFillMode = 'forwards'
    card.style.animationDuration = "1s" 
    checkPin()
}
//show massage for user to fill amount of deposit after clicking d btn
dBtn.addEventListener("click",() =>{
    if(dBtnState == true){
    content.innerHTML = ""
    emptyMenu()
    content.innerHTML = '<h2>How much would you like to Deposite?</h2><input id="dBtnInput" type=number max="9999">'
    content.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) { // Check if the key pressed is the "Enter" key
            dBtnInput = document.querySelector("#dBtnInput")
            addDeposit(); // Reuse the function to perform the action
          }
    })};
})
//function add deposit to current user
function addDeposit(){
    let newDeposit = parseFloat(dBtnInput.value)
    let usersData = JSON.parse(localStorage.getItem("users"));
    if((newDeposit % 50) == 0 || (newDeposit % 100) == 0 || (newDeposit % 20) == 0){
        if(pincodeInputEl.value == 1111 && dBtnState == true){
        usersData[0].amount += newDeposit
        console.log(newDeposit);
        localStorage.setItem("users", JSON.stringify(usersData));
        console.log(usersData[0].amount);
        content.innerHTML = ""
        content.innerHTML = "<h2>deposit added successfully to amount! what would you like to do next?"
        fullMenu()
        }
        else if(pincodeInputEl.value == 1234  && dBtnState == true){
        usersData[1].amount += newDeposit
        console.log(newDeposit);
        localStorage.setItem("users", JSON.stringify(usersData));
        console.log(usersData[1].amount);
        content.innerHTML = ""
        content.innerHTML = "<h2>deposit added successfully to amount! what would you like to do next?"
        fullMenu()

        }
        else if(pincodeInputEl.value == 1000 && dBtnState == true){
        usersData[2].amount += newDeposit
        console.log(newDeposit);
        localStorage.setItem("users", JSON.stringify(usersData));
        console.log(usersData[2].amount);
        content.innerHTML = ""
        content.innerHTML = "<h2>deposit added successfully to amount! what would you like to do next?"
        fullMenu()

        }
    }
        else{
        content.innerHTML = "<h2>deposit can't be added to amount! try again"
        }    
}
//show massage for user to fill amount of withdraw after clicking w btn
wBtn.addEventListener("click",() =>{
    content.innerHTML = ""
    emptyMenu()
    content.innerHTML = '<h2>How much would you like to withdraw?</h2>'
    withdrawMenu()
})
function withdrawMenu(){
    if(wBtnState = false)
    emptyMenu()
    depositeH3El.innerHTML = "50"
    WithdrawH3El.innerHTML = "100"
    CheckH3El.innerHTML = "150"
    changePinEl.innerHTML = "300"
    createRecipeEl.innerHTML = "other"
    QuitH4El.innerHTML = "Press button q to Quit"
    dBtnState = false
    wBtnState = false
    cBtnState = false
    pBtnState = false
    rBtnState = true
    qBtnState = false
}

    dBtn.addEventListener("click",() =>{
    let usersData = JSON.parse(localStorage.getItem("users"));
    if(pincodeInputEl.value == 1111 && dBtnState == false) {
        if(usersData[0].amount - 50 >= 0){
        usersData[0].amount -= 50
        localStorage.setItem("users", JSON.stringify(usersData));
        console.log(usersData[0].amount);
        content.innerHTML = ""
        content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
        }else{
            content.innerHTML = ""
            content.innerHTML = "<h2>not enough</h2>"    
        }
        fullMenu()
        }
        else if(pincodeInputEl.value == 1234 && dBtnState == false){
            if(usersData[1].amount - 50 >= 0){
                usersData[1].amount -= 50
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[1].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()
        }
        else if(pincodeInputEl.value == 1000 && dBtnState == false){
            if(usersData[2].amount - 50 >= 0){
                usersData[2].amount -= 50
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[2].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()
        }})
    wBtn.addEventListener("dblclick",() =>{
        if(pincodeInputEl.value == 1111 && wBtnState == false){
            if(usersData[0].amount - 100 >= 0){
                usersData[0].amount -= 100
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[0].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()
        }
        else if(pincodeInputEl.value == 1234){
            if(usersData[1].amount - 100 >= 0){
                usersData[1].amount -= 100
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[1].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
        fullMenu()
        }
        else if(pincodeInputEl.value == 1000){
            if(usersData[2].amount - 100 >= 0){
                usersData[2].amount -= 100
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[2].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
        fullMenu()
    }})
    cBtn.addEventListener("click",() =>{
        if(cBtnState == false && pincodeInputEl.value == 1111){
            if(usersData[0].amount - 150 >= 0){
                usersData[0].amount -= 150
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[0].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()

        }
        else if(cBtnState == false && pincodeInputEl.value == 1234){
            if(usersData[1].amount - 150 >= 0){
                usersData[1].amount -= 150
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[1].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()

        }
        else if(cBtnState == false && pincodeInputEl.value == 1000){
            if(usersData[2].amount - 150 >= 0){
                usersData[2].amount -= 150
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[2].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
                fullMenu()

        }})
    pBtn.addEventListener("click",() =>{
        if(pincodeInputEl.value == 1111 && pBtnState == false){
            if(usersData[0].amount - 300 >= 0){
                usersData[0].amount -= 300
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[0].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
        fullMenu()
        }
        else if(pincodeInputEl.value == 1234){
            if(usersData[1].amount - 300 >= 0){
                usersData[1].amount -= 300
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[1].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
        fullMenu()
        }
        else if(pincodeInputEl.value == 1000){
            if(usersData[2].amount - 300 >= 0){
                usersData[2].amount -= 300
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[0].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?</h2>"
                }else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough</h2>"    
                }
        fullMenu()
        }})   
    rBtn.addEventListener("click",() =>{
        if(rBtnState == true){
            content.innerHTML = ""
            emptyMenu()
            content.innerHTML = '<h2>How much would you like to withdraw?</h2><input id="withdrawInput" type=number max="9999">'
            content.addEventListener("keydown", function(e) {
                if (e.keyCode === 13) { // Check if the key pressed is the "Enter" key
                    withdrawInput = document.querySelector("#withdrawInput")
                    withdrawInputF(); // Reuse the function to perform the action
                }
            });
        }})
        function withdrawInputF(){
                localStorage.getItem("users", JSON.stringify(usersData));
                if(pincodeInputEl.value == 1111){
                    if(usersData[0].amount - withdrawInput.value >= 0){
                    console.log(usersData[1].amount);
                    console.log(withdrawInput);
                    usersData[0].amount -= withdrawInput.value
                    localStorage.setItem("users", JSON.stringify(usersData));
                    console.log(usersData[0].amount);
                    content.innerHTML = ""
                    content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?"
                fullMenu()}
                else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough money</h2"
                }}
            else if(pincodeInputEl.value == 1234){
                if(usersData[1].amount - withdrawInput.value >= 0){
                usersData[1].amount -= withdrawInput.value
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[1].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?"
                fullMenu()}
                else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough money</h2"
                }    
            }
            else if(pincodeInputEl.value == 1000){
                if(usersData[0].amount - withdrawInput.value >= 0){
                localStorage.setItem("users", JSON.stringify(usersData));
                console.log(usersData[2].amount);
                content.innerHTML = ""
                content.innerHTML = "<h2>withdraw successfully removed from amount! what would you like to do next?"
                fullMenu()
            }
                else{
                    content.innerHTML = ""
                    content.innerHTML = "<h2>not enough money</h2"
                }
            }  
        }

        


//get user balance
cBtn.addEventListener("click",() =>{
    if(pincodeInputEl.value == 1111 && cBtnState == true){
        content.innerHTML = ""
        content.innerHTML = `<h2>your current balance is:${usersData[0].amount}</h2>`
        }
        else if(pincodeInputEl.value == 1234 && cBtnState == true){
            content.innerHTML = ""
            content.innerHTML = `<h2>your current balance is:${usersData[1].amount}</h2>`
        }
        else if(pincodeInputEl.value == 1000 && cBtnState == true){
            content.innerHTML = ""
            content.innerHTML = `<h2>your current balance is:${usersData[2].amount}</h2>`
        }
        }

)

//QUIT
qBtn.addEventListener("click",() =>{
    content.innerHTML = ""
    content.innerHTML = `<h2>GOODBYE, HAVE A NICE DAY</h2>`
    emptyMenu();
    card.style.animationName = 'example-backwards'
    card.style.animationFillMode = 'backwards'
    card.style.animation = 'none'
    })


function cancel() {
    emptyMenu();
    card.style.animationName = 'example-backwards'
    card.style.animationFillMode = 'backwards'
    welcome()
}
function clearContent(){
    content.innerHTML = "<h2>hello again, choose your action</h2>"
    fullMenu()
}

//call welcome function on entry
welcome()

