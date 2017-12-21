var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');


function setUsername(){
    var myName = prompt('Please enter ur name.');
    localStorage.setItem('userName',myName);
    myHeading.textContent = "Mozilla is cool! "+myName;    
}

if(!localStorage.getItem('userName')){
    setUsername()
}else{
    myHeading.textContent = "Mozilla is cool! "+localStorage.getItem('userName');
}

myButton.onclick = function(){
    setUsername();
}