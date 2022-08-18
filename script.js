// add Quinn Head at mouse click location
// ./img/quinn

const quinn = document.querySelector('.quinn');
const quinnP = document.querySelector('.quinnLocation');
const quinnHead = document.createElement('img');
quinnHead.src = './img/quinn.png'
const quinnBody = document.getElementsByTagName("body")[0];



//create new div flex box position absolute x y coord = mouse location
// addEventListener('mousedown', runEvent)


quinnBody.addEventListener('mousedown', runEvent)


//set quinn div w/h to canvas size

function runEvent(e) {
    // quinnP.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`
    console.log("runEvent was called")
    var x = document.createElement('IMG');
    let quinnX = e.pageX - 50;
    let quinnY = e.pageY - 50;
    x.setAttribute('src', './img/quinn.png');
    x.setAttribute('width', '100px');
    x.setAttribute('alt', 'Quinn head'),
    // x.setAttribute('position', 'fixed');
    x.setAttribute('style', `position: absolute; top: ${quinnY}px; left: ${quinnX}px;`)
    // x.setAttribute('top', `${quinnY}px`); 
    // x.setAttribute('left', `${quinnX}px`);
    quinn.appendChild(x);

    //quinn.innerHTML = `<img src="./img/quinn.png" style="position: absolute; top: ${quinnY}px; left: ${quinnX}px;" width="100" height="100"></img>`
}