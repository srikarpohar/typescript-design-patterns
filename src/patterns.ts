import {runFactoryMethod} from "./creational/factory/index";
import { runSingletonMethod } from "./creational/singleton";


export const patterns: Record<string, (...args: any) => void> = {
  "factory": runFactoryMethod,
  "singleton": runSingletonMethod,
};