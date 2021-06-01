const toggleSwitch = document.querySelector('.slider');
console.log(toggleSwitch.value)


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