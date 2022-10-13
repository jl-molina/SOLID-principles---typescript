import { IShape } from './shape.interface';

export class Square implements IShape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setHeight(height: number) {
        this.height = height;
        this.width = height;
    }

    setWidth(width: number) {
        this.height = width;
        this.width = width;
    }

    getArea(): number {
        return this.width * this.height;
    }

}