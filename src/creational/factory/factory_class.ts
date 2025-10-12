// Factory class which creates document based on given product subclass
import { DocumentContent, Renderer } from "./product_interface";
import { HTMLRenderer, PDFRenderer } from "./concrete_product_class";

// and also contains logic to implement any business logic on the product object created.
export abstract class DocumentViewerFactory  {
   // This method could be abstract or a generic method based on type as below(createRendererGeneric).
   // Abstract method must be implemented in it's sub class.
   public abstract createRenderer(destination: string): Renderer;

   // Use this method when 
   public render(destination: string, content: DocumentContent): boolean {
      let isRendered = true;
      try {
         // Create renderer object using above abstract method.
         const renderer = this.createRenderer(destination);

         // call the product's render method to render the content inside the document.
         isRendered = renderer.render(content);
      } catch(error: any) {
         // TODO: Error handling to be implemented.
         isRendered = false;
         console.log(error.message)
      } finally {
         return isRendered;
      }
   }
}

// Concrete implementations of concrete viewer factory classes.
export class PDFDocumentViewer extends DocumentViewerFactory {
   // Sub class implementation to create seperate pdf renderer object.
   public createRenderer(destination: string): PDFRenderer {
      const pdfRenderer = new PDFRenderer();
      pdfRenderer.createRenderer(destination);
      return pdfRenderer;   
   }
}

// Concrete implementations of concrete viewer factory classes.
export class HTMLDocumentViewer extends DocumentViewerFactory {
   // Sub class implementation to create seperate html renderer object.
   public createRenderer(destination: string): HTMLRenderer {
      const htmlRenderer = new HTMLRenderer();
      htmlRenderer.createRenderer(destination);
      return htmlRenderer;   
   }
}
