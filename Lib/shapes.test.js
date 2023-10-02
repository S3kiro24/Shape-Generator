const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should set the color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.color).toBe('blue');
  });

  it('should render the SVG content for Circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svgContent = circle.render();
    expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Triangle', () => {
  it('should set the color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    expect(triangle.color).toBe('green');
  });

  it('should render the SVG content for Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svgContent = triangle.render();
    expect(svgContent).toContain('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Square', () => {
  it('should set the color', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.color).toBe('yellow');
  });

  it('should render the SVG content for Square', () => {
    const square = new Square();
    square.setColor('purple');
    const svgContent = square.render();
    expect(svgContent).toContain('<rect x="40" y="40" width="220" height="120" fill="purple" />');
  });
});
