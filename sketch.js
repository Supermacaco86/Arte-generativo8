function setup() {
  createCanvas(4000, 4000);

  let count = 0;
  while(count < 100000){
    let x = random(0, width);
    let y = random(0, height);

    let elipse1 = ellipse(x, y, 20);
    let elipse2 = ellipse(x, y, 10);
    count = count +1;
  } 
}

