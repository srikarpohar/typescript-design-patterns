import {expect, jest, test, describe} from '@jest/globals';
import { runSingletonMethod } from "../../../src/creational/singleton";

describe("run singleton pattern", () => {
    test("connection reused case", () => {
        // Mock console.log
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        runSingletonMethod();
        expect(logSpy).toHaveBeenCalledWith("Total connections created - 2: Instances - 1, 1");

        // Restore original console.log
        logSpy.mockRestore();
    })
})