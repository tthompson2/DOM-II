let mouseEvent = document.addEventListener('mouseover', () => {

    let aTag = document.querySelectorAll('a');
    aTag.forEach((element) => {
        element.stopPropagation
        element.style.color = 'green';
    });

});

let clickEvent = document.addEventListener('click', event => {

   let bodyTag = document.querySelector('body');
   bodyTag.style.color ='red';

});

let keyDown = document.addEventListener('keydown', (event) => {

    if (event.keyCode === 65)
    {
        alert("The 'A'|'a' key is being pressed");
    }
});

let wheelEvent = window.addEventListener('wheel', () => {

    alert("You're scrolling your mouse wheel");
});

let loadEvent = window.addEventListener('load', (event) => {

    alert("This message is displayed because the page fully loaded!");
     
});

let resizeEvent = window.addEventListener('resize', () => {

    widthElement = document.createElement('p');
    heightElement = document.createElement('p');

    widthElement.textContent = window.innerWidth;
    heightElement.textContent = window.innerHeight;

    console.log('width: ' + widthElement.textContent + ' height: ' + heightElement.textContent);  

});

let scrollEvent = document.addEventListener('scroll', () => {

    let selectedP = document.querySelectorAll('p');
    selectedP.forEach((element) => {

    element.target.backgroundColor = 'purple';
    });

});

const newText = document.querySelectorAll(".btn");

newText.forEach(element => {

element.addEventListener('dblclick', (event) => {
 
   alert("Twice Clicked");
  
  });
});

const mouseMove = document.querySelectorAll('a');

mouseMove.forEach(element => {

    element.addEventListener('auxclick', (event => {

        event.stopPropagation();
        event.style.color = 'brown';
    }));
});

const mouseUp = document.querySelectorAll('p');

mouseUp.forEach(element => {

    element.addEventListener('mouseup', event => {

        event.stopPropagation();
        event.style.color = 'green';
    });
})

const preventNavigation = document.querySelectorAll('a');

preventNavigation.forEach(element => {

    element.preventDefault();
})

/* These eventListener functions aren't completed yet. */

let onlineChecker = window.addEventListener('online', (event) => {

  alert("The user is now connected to the network");

});