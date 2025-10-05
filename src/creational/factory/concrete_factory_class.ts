import { DocumentViewerFactory } from "./abstract_factory_class";
import { HTMLRenderer, PDFRenderer } from "./concrete_product_class";

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