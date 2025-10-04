import {runFactoryMethod} from "./creational/factory/index";
import { runSingletonMethod } from "./creational/singleton";


export const patterns: Record<string, () => void> = {
  "factory": runFactoryMethod,
  "singleton": runSingletonMethod,
};