//When I type a text in to the input field, the word I typed will show up on the screen when I click the "add item" button

let addButton = document.getElementById('add');
let clearButton = document.getElementById('clear');
let check = 

addButton.addEventListener('click', function() {

    //Getting the input field
    let input = document.getElementById('activity');
    //This is the value of the input field- whatever you type into the field 
    let activityName = input.value;
    //Getting at the list container
    let container = document.getElementById('list-container');
    //Creating a new div in order to attach to the list container
    let div = document.createElement('div');
    //Attaching the new div to the list container. 
    container.append(div);
    //The inner text of the new div will be the activityName
    div.innerText = activityName;
    //Once the input field has been submitted by this button, the input value is going to be clear
    input.value = ' ';



    //Creating icon to clear individual item
    //To do this, create an image element and then set the attributes of the image using setAttribute
    let icon = document.createElement('IMG');
    icon.setAttribute('src', 'check-mark.png')
    icon.setAttribute('width', '30');
    icon.setAttribute('height', '30');
    
    //Adding the icon to the new div
    div.appendChild(icon);
    
    //When the image element (icon) has been clicked, it will put a line through the the div
    icon.addEventListener('click', function() {

        div.style.textDecoration = "line-through";

    })


})

