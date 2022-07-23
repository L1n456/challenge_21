const bill = document.querySelector("#bill");
const b = document.querySelector(".bill");
const tip = document.querySelector("#tip");
const people = document.querySelector("#people");
const p = document.querySelector(".people");
const btn = document.querySelectorAll("button");
const per = document.querySelectorAll(".prc");
const tip_per_person = document.querySelector(".tip-p");
const total_per_person = document.querySelector(".tot-p");
const reset = document.querySelector(".rst");
const error_1 = document.querySelector(".err-1");
const error_2 = document.querySelector(".err-2");

function valid_1(){
    if(bill.value=== ""){
        error_1.style.display = "block";
        b.style.borderColor = "hsl(18, 97%, 46%)";
    }else{
        error_1.style.display = "none";
        b.style.borderColor = "transparent";
    }
}

function valid_2(){
    if(people.value=== ""){
        error_2.style.display = "block";
        p.style.borderColor = "hsl(18, 97%, 46%)";
    }else{
        error_2.style.display = "none";
        p.style.borderColor = "transparent";
    }
}

tip.addEventListener( "keydown", function( e ) {
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
       
    valid_1(); valid_2();

    let result_1=  ((bill.value)/(people.value))*((tip.value)/100);
    tip_per_person.innerHTML = "$" + result_1.toFixed(2);

    let result_2=  ((bill.value)/(people.value)) + result_1;
    total_per_person.innerHTML = "$" + result_2.toFixed(2);
    }
}, false);


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",function onClick(){
        valid_1(); valid_2();

        let result_1=  ((bill.value)/(people.value))*((per[i].innerHTML)/100);
        tip_per_person.innerHTML = "$" + result_1.toFixed(2);

        let result_2=  ((bill.value)/(people.value)) + result_1;
        total_per_person.innerHTML = "$" + result_2.toFixed(2);
    }) 
    
}

reset.addEventListener("click",function onClick(){
    document. location. reload();
})
   

     


