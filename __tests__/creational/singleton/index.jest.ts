import {expect, jest, test, describe} from '@jest/globals';
import { runSingletonMethod } from "../../../src/creational/singleton";

describe("run signleton pattern", () => {
    test("connection reused case", () => {
        // Mock console.log
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        runSingletonMethod();
        expect(logSpy).toHaveBeenCalledWith("Same connection is reused in conn2! Singleton pattern achieved 😃");

        // Restore original console.log
        logSpy.mockRestore();
    })
})