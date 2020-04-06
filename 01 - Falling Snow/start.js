(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // const { getContext } = canvas;
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowBalls: 250,
    };
  }
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        positionX: random(0, canvas.width),
        positionY: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3)
      };
    });
  }
  function drawSnowBall(canvasContext, snowBall) {
    let { positionX, positionY, radius, opacity } = snowBall;
    canvasContext.beginPath();
    canvasContext.arc(positionX, positionY, radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    canvasContext.fill();
  }
  function moveSnowBall(snowBall, canvas) {
    let { speedX, speedY } = snowBall;
  // function moveSnowBall({positionX, positionY}) {
    // snowBall.positionX += snowBall.speedX;
    // snowBall.positionY += snowBall.speedY;
    // snowBall.positionX += 5;
    // snowBall.positionY += 5;
    snowBall.positionX += speedX;
    snowBall.positionY += speedY;
    if(snowBall.positionX > canvas.width) 
      snowBall.positionX = 0;
    else if(snowBall.positionX < 0) 
      snowBall.positionX = canvas.width;
    if(snowBall.positionY > canvas.height) 
      snowBall.positionY = 0;

  }
  function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    // snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(snowBall, canvas));
    }, 50)
  }
  run();
})();
