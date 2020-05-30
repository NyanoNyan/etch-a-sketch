size = 3

// Make a 16*16 grid


function makeRows(rows, cols){

    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i =0; i<(rows*cols); i++){
        let cell = document.createElement("div")
        //cell.textContent = i
        cell.setAttribute('id',i)
        container.appendChild(cell).className = "grid-item"
}

}

makeRows(size,size)


function change_grid_colour(){

    let grid = document.getElementsByClassName("grid-item");
    let p = Array.from(grid)

    p.forEach((div) => {

        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor="purple"
    })
    })
}

function reset_grid(){

    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {

    let container = document.getElementById("container");
    console.log(container)

    while (container.firstElementChild){
        container.removeChild(container.lastChild)
    }
    
    input = window.prompt("What size do you want to the grid to be?")
    makeRows(input, input)

    change_grid_colour()


})
}


change_grid_colour()
reset_grid()
