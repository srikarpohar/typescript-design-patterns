import { Point, Shape } from "./shape_prototype";

export class Rectangle extends Shape {
    length!: number;
    breadth!: number;
    // property with back reference to rectangle.
    arrow!: Arrow;

    constructor(source?: Rectangle, point?: Point, length?: number, breadth?: number) {
        super(source, point);
        if(source) {
            this.length = source.length;
            this.breadth = source.breadth;
        } else {
            this.length = length ?? 0;
            this.breadth = breadth ?? 0;
        }
        this.arrow = new Arrow(this);
    }

    public clone() {
        return new Rectangle(this);
    }
}

// has a back reference to rectangle class.
class Arrow {
    rectangle!: Rectangle;

    constructor(source: Rectangle) {
        this.rectangle = source;
    }
}