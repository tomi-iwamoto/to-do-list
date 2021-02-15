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
    //Adding width to container
    container.style.width = "70%";

    //Adding styles to this div
    div.style.padding = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";



    //Creating a second div to place inside of the original div
    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);

    //Creating icon to clear individual item
    //To do this, create an image element and then set the attributes of the image using setAttribute
    let check = document.createElement('IMG');
    check.setAttribute('src', 'check-mark.png')
    check.setAttribute('width', '25');
    check.setAttribute('height', '25');
    
    //Adding the icon to the inner div
    innerDiv.appendChild(check);
    
    //When the image element (icon) has been clicked, it will put a line through the the div
    check.addEventListener('click', function() {

        innerDiv.style.textDecoration = "line-through";

    })


    //Adding a close icon
    let close = document.createElement('IMG');
    close.setAttribute('src', 'close.png');
    close.setAttribute('width', '25');
    close.setAttribute('height', '25');

    //Adding the icon to the added div
    innerDiv.appendChild(close);

    //When the close button is clicked, it will remove the added div
    close.addEventListener('click', function() {

        div.style.display = 'none';

    })


})

