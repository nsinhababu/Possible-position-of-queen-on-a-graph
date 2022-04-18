let obstaclePosData = new Map();

class pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function checkPosition(x, y, dx, dy, obstaclePosData, noOfPos) {
  let obstacle = obstaclePosData.has(new pair(x, y));
  while (x <= 7 && x >= 0 && y <= 9 && y >= 0 && !obstacle) {
    // while (graphArea(x, y) && !obstaclePosData.has(new pair(x, y))) {
    x += dx;
    y += dy;
    noOfPos++;
  }

  return noOfPos;
}
let obstacleArr = [];
let obstaclePosition;

function posOfBob(x, y) {
  let noOfPos = 0;
  let obstacleY = [1, 1, 2, 4, 4, 6, 7, 7, 9];
  let obstacleX = [1, 5, 4, 3, 6, 6, 2, 5, 4];
  for (let i = 0; i < obstacleX.length; i++) {
    x1 = obstacleX[i];
    y1 = obstacleY[i];
    obstaclePosData.set(new pair(x1, y1), 1);
    // console.log(obstaclePosData);
  }
  noOfPos += checkPosition(x + 1, y + 1, 1, 1, obstaclePosData, noOfPos);

  noOfPos += checkPosition(x + 1, y - 1, 1, -1, obstaclePosData, noOfPos);

  noOfPos += checkPosition(x - 1, y + 1, -1, 1, obstaclePosData, noOfPos);

  noOfPos += checkPosition(x - 1, y - 1, -1, -1, obstaclePosData, noOfPos);

  return noOfPos;
}

// posOfBob(horizontal, vertical)

console.log(posOfBob(3, 9));
