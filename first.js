let modebtn= document.querySelector("#mode");
let currentmode= "Light";
modebtn.addEventListener("click", ()=>{
    if(currentmode=== "Light"){
        currentmode = "Dark";
        document.querySelector("body").style.backgroundColor="Black";
    }
    else{
        currentmode = "Light";
        document.querySelector("body").style.backgroundColor="White";
    }

console.log(currentmode);
});

