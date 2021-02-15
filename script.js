//When I type a text in to the input field, the word I typed will show up on the screen when I click the "add item" button

let addButton = document.getElementById('add');
let clearButton = document.getElementById('clear');
 


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


    //Adding styles to this div
    div.style.padding = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    //Adding a class of add to this -- in order to access this later in the clear button event listener
    div.classList.add('add');



    //Creating a second div to place inside of the original div to use as a wrapper for the icons
    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);

    //Creating icon to clear individual item
    //To do this, create an image element and then set the attributes of the image using setAttribute
    let check = document.createElement('IMG');
    check.setAttribute('src', 'check-mark.png')
    check.setAttribute('width', '20');
    check.setAttribute('height', '20');
    check.style.margin = "10px";
    
    //Adding the icon to the inner div
    innerDiv.appendChild(check);
    
    //When the image element (icon) has been clicked, it will put a line through the the div
    check.addEventListener('click', function() {

        div.style.textDecoration = "line-through";

    })


    //Adding a close icon
    let close = document.createElement('IMG');
    close.setAttribute('src', 'close.png');
    close.setAttribute('width', '20');
    close.setAttribute('height', '20');
    close.style.margin = "10px";


    //Adding the icon to the added div
    innerDiv.appendChild(close);

    //When the close button is clicked, it will remove the added div
    close.addEventListener('click', function() {

        div.style.display = 'none';

    })



  

})



//This clear button will erase all entries
clearButton.addEventListener('click', function() {

    //Getting at the div elements with the class of "add"
    let addedItems = document.querySelectorAll('.add');
    //Creating array from this nodelist
    let addedItemsArray = Array.from(addedItems);

    //For each of the added divs with the class of "add",run this function- This will remove the item from the screen
    addedItems.forEach(function(target) {

        target.style.display = 'none';

    })


})