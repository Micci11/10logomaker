import { Triangle, Circle, Square } from './shapes';

test('triangle should generate valid SVG', () => {
  const triangle = new Triangle('red');
  expect(triangle.toSvg()).toBe('<polygon points="150,50 100,150 200,150" fill="red" />');
});

test('circle should generate valid SVG', () => {
  const circle = new Circle('blue');
  expect(circle.toSvg()).toBe('<circle cx="150" cy="100" r="50" fill="blue" />');
});

test('square should generate valid SVG', () => {
  const square = new Square('green');
  expect(square.toSvg()).toBe('<rect x="100" y="50" width="100" height="100" fill="green" />');
});
