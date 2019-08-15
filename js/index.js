givar mouseEvent = document.addEventListener('mouseover', () => {

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


var dropEvent = document.addEventListener('drop', (event) => {

   // This function below is used to negate the default behavior of the HTML element, which is important
   // if the default properties of the element were interactive!

   event.preventDefault();

   if (event.target.className == 'dropZone') // need to find or create equivalent to this for this application
   {
       event.target.style.background = '';
       //need to figure out what the parent node in this case is. Have to study the HTML and figure it out.
       //event.target.appendChild (varaible referenced line above needs to referenced here)
  }
    
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

    event.target.backgroundColor = 'purple';
    });

});

const selectCallback = ((event) => {

    const containerElement = document.getElementsByTagName('container nav-container');
    containerElement.textContent = 'You selected: h1';

    console.log(containerElement.textContent);

    alert(containerElement.textContent);
});

var selectEvent = document.addEventListener('select', (selectCallback));

var dbClickEvent = document.addEventListener('dbClick', (event) => {

    let newText = document.querySelectorAll('h2');
    newText.forEach((element) => {

    element.textContent = 'Twiced clicked';
    });
});
