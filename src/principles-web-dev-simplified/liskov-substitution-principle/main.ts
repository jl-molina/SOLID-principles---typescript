import { Rectangle } from "./rectangle";
import { Square } from "./square";

const rectangle = new Rectangle(10, 20);
const square = new Square(10, 10);

console.log('rectangle area:', rectangle.getArea());
console.log('square area:', square.getArea());

rectangle.setHeight(30);
square.setHeight(30);

console.log('rectangle area:', rectangle.getArea());
console.log('square area:', square.getArea());