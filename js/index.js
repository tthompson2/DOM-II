// Your code goes here

var mouseEvent = document.addEventListener('mouseover', () => {

    let aTag = document.querySelectorAll('a');
    aTag[0].style.color = 'green';

});

var keyDown = document.addEventListener('keydown', (event) => {

    if (event.keyCode === 65)
    {
        alert("The 'A'|'a' key is being pressed");
    }
});

var wheelEvent = document.addEventListener('wheel', () => {

    alert("You're scrolling your mouse wheel");
});


var dropEvent = document.addEventListener('drop', () => {

    
});

var loadEvent = document.addEventListener('load', (event) => {

     
});


var resizeEvent = document.addEventListener('resize', () => {

});

var scrollEvent = document.addEventListener('scroll', () => {



});

var selectEvent = document.addEventListener('select', () = {

});

var dbClickEvent = document.addEventListener('dbClick', () => {

});
