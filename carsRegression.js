console.log('Hello TensorFlow');

var x = document.createElement("H2");
var title = document.createTextNode("Making Predictions with 2D Data");

//this model will take one number (horsepower) and predict one number (MPG)
x.appendChild(title);
var y = document.createElement("H3");
var subtitle = document.createTextNode("TensorFlow.js Cars Tutorial")
y.appendChild(subtitle)
document.body.appendChild(x);
document.body.appendChild(y);

/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
async function getData() {
  const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');  
  const carsData = await carsDataReq.json();  
  const cleaned = carsData.map(car => ({
    mpg: car.Miles_per_Gallon,
    horsepower: car.Horsepower,
  }))
  .filter(car => (car.mpg != null && car.horsepower != null));
  
  return cleaned;
}

async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    {name: 'Horsepower v MPG'},
    {values}, 
    {
      xLabel: 'Horsepower',
      yLabel: 'MPG',
      height: 300
    }
  );

  // More code will be added below
}

document.addEventListener('DOMContentLoaded', run);