/*
  Whiteboard example - cloning different shape objects.
  Shape - abstract class
  Rectangle, Circle - extends Shape
*/

import { Rectangle } from "./concrete_shapes";
import { Shape } from "./shape_prototype";

export const runPrototypeMethod = (): Shape => {
    const rect1 = new Rectangle();
    rect1.point = {
        x: 10,
        y: 20
    }
    rect1.length = 50;
    rect1.breadth = 40;
    const rect2 = rect1.clone();
    if(rect1.length == rect2.length && rect1.breadth == rect2.breadth) {
        console.log("Length and breadth have been cloned successfully!✅");
    } else {
        console.log("Length and breadth have not been cloned successfully!😑");
    }

    if(rect1.point == rect2.point) {
        console.log("Point has not not been cloned!😑");
    } else {
        console.log("Point has been cloned!✅");
    }

    if(rect1.arrow == rect2.arrow) {
        console.log("Arrow has not not been cloned!😑");
    } else {
        console.log("Arrow has been cloned!✅");
    }

    if(rect1.arrow.rectangle == rect2.arrow.rectangle) {
        console.log("Arrow's rectangle is linked to original object and so not not been cloned!😑");
    } else {
        console.log("Arrow's rectangle is linked to the cloned object!✅");
    }

    return rect2;
}

// class Circle extends Shape {
//     radius!: number;

//     constructor(source?: Circle, point?: Point, radius?: number) {
//         super(source, point);
//         if(source) {
//             this.radius = source.radius;
//         } else {
//             this.radius = radius ?? 0;
//         }
//     }

//     public clone() {
//         return new Circle(this);
//     }
// }