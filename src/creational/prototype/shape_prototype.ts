export interface Point {
    x: number;
    y: number;
}

export abstract class Shape {
    point!: Point;
    
    constructor(source?: Shape, point?: Point) {
        if(source) {
            this.point = Object.create(source.point);
        } else {
            this.point = point ?? {
                x: 0,
                y: 0
            };
        }
    }

    public abstract clone(): Shape;
}