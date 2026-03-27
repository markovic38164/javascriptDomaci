let canvas = document.querySelector('#drawArea');
let ctx = canvas.getContext('2d');

let nacrtajButton = document.querySelector('#draw');
let resetujButton = document.querySelector('#reset');

let clickPoints = [];
canvas.addEventListener('click', function (event) {
	let positionXinCanvas = event.clientX - canvas.getBoundingClientRect().left;
	let positionYinCanvas = event.clientY - canvas.getBoundingClientRect().top;
	clickPoints.push({ x: positionXinCanvas, y: positionYinCanvas });
});
nacrtajButton.addEventListener('click', function () {
	if (clickPoints.length === 0) return;
	ctx.beginPath();
	ctx.moveTo(clickPoints[0].x, clickPoints[0].y);
	for (let i = 0; i < clickPoints.length; i++) {
		if (i === 0) continue;
		ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
	}

	ctx.stroke();
	clickPoints = [];
});

resetujButton.addEventListener('click', function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
