import { DocumentContent, Renderer } from "./product_interface";

// Concrete implementations of product interface.
export class PDFRenderer implements Renderer {
   render(content: DocumentContent): boolean {
      let isRendered = false;
      try {
         // render logic for pdf.
         console.log(`PDF Renderer rendered document with given content ${content}`);
         console.log("------------------------------------------------------\n");
         isRendered = true;
      } catch(error) {
         // TODO: Error handling to be implemented.
         isRendered = false;
      } finally {
         return isRendered;
      }
   }

   createRenderer(destination: string) {
      let isDocCreated = true;
      try {
         // create document logic and initialise pdf renderer for the object to render at destination.
         console.log("\n------------------------------------------------------");
         console.log(`PDF Renderer created and ready to render in ${destination}.pdf`);
         isDocCreated = true;
      } catch(error) {
         // TODO: Error handling to be implemented.
         isDocCreated = false;
      } finally {
         return isDocCreated;
      }
   }
}

// Concrete implementations of product interface.
export class HTMLRenderer implements Renderer {
   render(content: DocumentContent): boolean {
      let isRendered = false;
      try {
         // render logic for html.
         console.log(`HTML Renderer rendered document with given content ${content}`);
         console.log("------------------------------------------------------\n");
         isRendered = true;
      } catch(error) {
         // TODO: Error handling to be implemented.
         isRendered = false;
      } finally {
         return isRendered;
      }
   }

   createRenderer(destination: string) {
      let isDocCreated = true;
      try {
          // create document logic and initialise html renderer for the object to render at destination.
         console.log("\n------------------------------------------------------");
         console.log(`HTML Renderer created and ready to render in ${destination}.html`);
         isDocCreated = true;
      } catch(error) {
         // TODO: Error handling to be implemented.
         isDocCreated = false;
      } finally {
         return isDocCreated;
      }
   }
}