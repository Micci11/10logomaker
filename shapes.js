class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    toSvg() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    toSvg() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    toSvg() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  export { Triangle, Circle, Square };
  