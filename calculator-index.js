let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);
buttons.map( button =>{
    button.addEventListener("click" ,(event)=>{
        console.log(event)
        switch(event.target.innerText){
            case"c":
            display.innerText = " ";
            break;
            case " -  ":
                display.innerText = display.innerText.slice(0, -1);
            case "=":
                try{
                display.innerText = eval(display.innerText);
                 } 
                 catch{
                    display.innerText = "Error!";
                 }
                 break;
            default:
                display.innerText += event.target.innerText;
        };

        
    });
});