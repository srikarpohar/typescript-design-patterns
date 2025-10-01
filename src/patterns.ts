import {runFactoryMethod} from "./creational/factory/index";


export const patterns: Record<string, () => void> = {
  "factory": runFactoryMethod,
};