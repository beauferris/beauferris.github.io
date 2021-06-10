const toggleSwitch = document.querySelector('.slider');
const solution = document.querySelector('.solution h1');
const button_1 = document.querySelector(".btn-1");
const del = document.querySelector('.del');
const reset = document.querySelector('.reset');
const add =  document.querySelector('.add');
const equals =  document.querySelector('.equals');
const buttons = document.querySelectorAll('.num');
const sub = document.querySelector('.sub');
const mul = document.querySelector('.mul');
const div = document.querySelector('.div');

let equation ="_"; 

function changeTheme(){
    if(toggleSwitch.value == 1){
        document.documentElement.setAttribute('data-theme', 'root');
    }    
    else if(toggleSwitch.value == 2){
        document.documentElement.setAttribute('data-theme', 'second');
    }
    else if(toggleSwitch.value == 3){
        document.documentElement.setAttribute('data-theme', 'third');
    }      
}

toggleSwitch.addEventListener('change', changeTheme, false);

function addNum(){
    if(equation==="_"){
        equation =this.value;
    }else{
        equation = equation+this.value;
    }
    
    solution.innerHTML=equation;
}

buttons.forEach(button=>{
    button.addEventListener('click',addNum,false);
})

del.addEventListener("click", function(){
    equation = equation.toString().slice(0,-1);
    if(equation==="" || equation==="_"){
        solution.innerHTML = "_";
    }else{
        solution.innerHTML = equation;
    }
   
},false);

reset.addEventListener("click", function(){
    equation = "_";
    solution.innerHTML = equation;
},false);

add.addEventListener("click", function(){
    equation = equation+"+"
    solution.innerHTML = equation;
},false);

sub.addEventListener("click", function(){
    equation = equation+"-"
    solution.innerHTML = equation;
},false);

mul.addEventListener("click", function(){
    equation = equation+"*"
    solution.innerHTML = equation;
},false);

div.addEventListener("click", function(){
    equation = equation+"/";
    solution.innerHTML = equation;
},false);

equals.addEventListener("click", function(){
    equation = eval(equation);
    equation = Math.round(equation * 100)/100;
    solution.innerHTML = equation;
},false);



