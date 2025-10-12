import {expect, jest, test, describe, beforeAll} from '@jest/globals';
import { runFactoryMethod } from '../../../src/creational/factory';
import { PDFRenderer } from '../../../src/creational/factory/concrete_product_class';
import { PDFDocumentViewer } from '../../../src/creational/factory/factory_class';

let pdfDestination: string, htmlDestination: string;

describe("run factory pattern success cases", () => {
    beforeAll(() => {
        pdfDestination = "./pdf_render_test";
        htmlDestination = './html_render_test';
    })

    test("pdf render call", () => {
        // Mock console.log
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        let content = "pdf render call testing...";
        let isRendered = runFactoryMethod("pdf", pdfDestination + "/render", content);
        expect(logSpy).toHaveBeenCalledWith(`PDF Renderer created and ready to render in ${pdfDestination}/render.pdf`);
        expect(logSpy).toHaveBeenCalledWith(`PDF Renderer rendered document with given content ${content}`);
        expect(isRendered).toBeTruthy();

        // Restore original console.log
        logSpy.mockRestore();
    })

    test("html render call", () => {
        // Mock console.log
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        let content = "html render call testing...";
        let isRendered = runFactoryMethod("html", htmlDestination + "/render", content);
        expect(logSpy).toHaveBeenCalledWith(`PDF Renderer created and ready to render in ${htmlDestination}/render.pdf`);
        expect(logSpy).toHaveBeenCalledWith(`PDF Renderer rendered document with given content ${content}`);
        expect(isRendered).toBeTruthy();

        // Restore original console.log
        logSpy.mockRestore();
    })
})

// error cases.
describe("run factory pattern error cases", () => {
    test("render creation error cases", () => {
        // Mock console.log
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        let content = "pdf render call error testing...";
        let pdfDocumentViewer = new PDFDocumentViewer();
        // Mock getUser to throw
        jest.spyOn(pdfDocumentViewer, 'createRenderer').mockImplementation(() => {
            throw new Error('Renderer creation failure');
        });
        let isRendered = pdfDocumentViewer.render(pdfDestination, content);
        
        // assertions.
        expect(logSpy).toHaveBeenCalledWith(`Renderer creation failure`);
        expect(isRendered).toBeFalsy();

        // Restore original console.log
        logSpy.mockRestore();
    })
})