
// alert('Hello')
//https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
// alert('What do you mean?')

//size = window.prompt("Enter your grid size")

size = 5
// Create a webpage with a 16*16 grid of square divs

function makeRows(rows, cols){

    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i =0; i<(rows*cols); i++){
        let cell = document.createElement("div")
        cell.textContent = i
        container.appendChild(cell).className = "grid-item"
}

}

makeRows(size,size)


// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);


// Set up a "hover" effect

//Hint: “hovering” is what happens when your mouse enters a div and ends when
// your mouse leaves it.. you can set up event listeners for either of those events 
// as a starting point.

let container = document.getElementById("container");

// This handler will be executed only once when the cursor
// moves over the unordered list
// container.addEventListener("mouseenter", function( event ) {   
//     // highlight the mouseenter target
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 500);
//   }, false);

  let divs = document.querySelectorAll('div');

  divs.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
    // Reset containers background color
    container.style.color=""
    container.style.backgroundColor=""
    //e.target.style.color="blue"
    div.style.backgroundColor="cyan"
    // setTimeout(function() {
    //     e.target.style.color = "";
    //   }, 500);
    // }, false); 
})
})
