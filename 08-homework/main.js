function resetPage() {
  document.location.reload();
}

function randomColor() {
let rgb = [];

for (let i = 0; i < 3; i++) {
  rgb.push(Math.round(Math.random() * 255));
}

return `rgb(${rgb.join(',')})`;
}

function generateBlocks() {
  const container = document.createElement('div');
  container.style.width = '250px';
  container.style.height = '250px';
  container.style.margin = '50px';
  container.style.border = '2px solid black ';
  document.body.append(container)

  for (var i = 0; i < 25; i++) {
    const square = document.createElement('div');

    square.style.width = '50px';
    square.style.height = '50px';
    square.style.float = "left";
    square.style.backgroundColor = randomColor();

    container.append(square);
  }
}
