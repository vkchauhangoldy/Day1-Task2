
function changeColor() {
    const rectangle = document.getElementById("container");
    rectangle.style.background = 'aqua';
}

function addChild() {
    const child = document.createElement('child');
    child.style.width = '100px'
    child.style.height = '100px'
    child.style.border = '2px solid red'
    child.style.backgroundColor = 'blue'
    document.querySelector('div').appendChild(child)

}

removeChild.addEventListener('click', function(){
    container.removeChild(container.lastChild);
});