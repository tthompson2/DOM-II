var mouseEvent = document.addEventListener('mouseover', () => {

    let aTag = document.querySelectorAll('a');
    aTag.forEach((element) => {
        element.style.color = 'green';
    });

});

var keyDown = document.addEventListener('keydown', (event) => {

    if (event.keyCode === 65)
    {
        alert("The 'A'|'a' key is being pressed");
    }
    // Figure out why that logic doesn't work together
    /*else if(event.keycode === 66)
    {
        alert("The B | b key is being pressed");
    }*/
});

var wheelEvent = window.addEventListener('wheel', () => {

    alert("You're scrolling your mouse wheel");
});


var dropEvent = document.addEventListener('drop', () => {


    
});

// Okay, this isn't working, and I don't understand why

var loadEvent = document.addEventListener('load', (event) => {

    console.log("This message is displayed because the page fully loaded!");
     
});

var focusEvent = document.addEventListener('focus', (event) => {

    event.target.style.background = 'red';

});

var blurEvent = document.addEventListener('blur', (event) => {

    event.target.style.background = ' ';
});

var resizeEvent = document.addEventListener('resize', () => {    

});

var scrollEvent = document.addEventListener('scroll', () => {

    let selectedP = document.querySelectorAll('p');
    selectedP.forEach((element) => {

    event.target.style.color = purple;
    });

});

var selectEvent = document.addEventListener('select', () => {

});

var dbClickEvent = document.addEventListener('dbClick', (event) => {

    let newText = document.querySelectorAll('h2');
    newText.forEach((element) => {

        element.textContent = 'Twiced clicked';
    });
});
