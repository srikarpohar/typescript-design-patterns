import {runFactoryMethod} from "./creational/factory";
import { runPrototypeMethod } from "./creational/prototype";
import { runSingletonMethod } from "./creational/singleton";


export const patterns: Record<string, (...args: any) => void> = {
  "factory": runFactoryMethod,
  "singleton": runSingletonMethod,
  "prototype": runPrototypeMethod
};