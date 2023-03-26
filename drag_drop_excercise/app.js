const body = document.querySelector("body");
const addBtn = document.getElementById("add-btn");
let elements = 0;

function addEleHandler() {
  const newEle = document.createElement("div");
  newEle.id = `ele${elements + 1}`;
  newEle.className = "element";
  newEle.draggable = true;
  newEle.innerHTML = `Element ${elements + 1}`;
  body.append(newEle);
  elements++;
}
addBtn.addEventListener("click", addEleHandler);

body.addEventListener("dragstart", function (event) {
  const id = event.target.closest("div").id;
  const ele = document.getElementById(id);
  event.dataTransfer.setData(
    "text/plain",
    JSON.stringify({
      id: id,
      startX: event.pageX,
      startY: event.pageY,
      eleW: event.target.offsetWidth,
      eleH: event.target.clientHeight,
      eleX: ele.offsetLeft,
      eleY: ele.offsetTop,
    })
  );
  event.dataTransfer.effectAllowed = "move";
});

body.addEventListener("dragover", event => {
  event.preventDefault();
});

body.addEventListener("drop", event => {
  const eventData = JSON.parse(event.dataTransfer.getData("text/plain"));
  const elemnt = document.getElementById(eventData.id);

  const xMove = event.pageX - eventData.startX;
  const yMove = event.pageY - eventData.startY;
  console.log(
    `startX: ${eventData.startX}, endX: ${event.pageX}, 
startY: ${eventData.startY}, endY: ${event.pageY}
ele Width: ${eventData.eleW}
ele Hight: ${eventData.eleH}
ele X: ${eventData.eleX}
ele Y: ${eventData.eleY}
X = ${xMove}
Y = ${yMove}`
  );

  const textMoveX = xMove === 0 ? `prawo: 0` : xMove > 0 ? `prawo: ${xMove}` : `lewo: ${Math.abs(xMove)}`;
  const textMoveY = yMove === 0 ? `góra: 0` : yMove > 0 ? `góra: ${yMove}` : `dół: ${Math.abs(yMove)}`
  console.log(textMoveX + ', ' + textMoveY)
  elemnt.style.left = (eventData.eleX + xMove) + "px";
  elemnt.style.top = (eventData.eleY + yMove) + "px";
  console.log(elemnt.style.left + ', ' + elemnt.style.top)

});
