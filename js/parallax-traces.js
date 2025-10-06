let targetX = 0,
	targetY = 0;
let currentX = 0,
	currentY = 0;

document.addEventListener("mousemove", (e) => {
	targetX = (e.clientX / window.innerWidth - 0.5) * 2;
	targetY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
	currentX += (targetX - currentX) * 0.1;
	currentY += (targetY - currentY) * 0.1;

	const topRight = document.querySelector(".trace-top-right");
	const bottomLeft = document.querySelector(".trace-bottom-left");

	if (topRight)
		topRight.style.transform = `translate(${40 + currentX * 5}%, ${
			10 + currentY * 10
		}%)`;

	if (bottomLeft)
		bottomLeft.style.transform = `translate(${-10 - currentX * 10}%, ${
			20 - currentY * 10
		}%)`;

	requestAnimationFrame(animate);
}

animate();
