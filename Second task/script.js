  function Cubeobject(sideLength) {
    this.sideLength = sideLength;
  }
  
  Cubeobject.prototype.calculateArea = function() {
    return 6 * this.sideLength * this.sideLength;
  };
  
  Cubeobject.prototype.calculatePerimeter = function() {
    return 12 * this.sideLength;
  };
  
  let sideLength = parseFloat(prompt("Enter the length of the cube's side:"));
  
  if (isNaN(sideLength)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    let cube = new Cubeobject(sideLength);
  
    console.log("Area: " + cube.calculateArea());
    console.log("Perimeter: " + cube.calculatePerimeter());
  }

  
  
  
  
  
  
  
