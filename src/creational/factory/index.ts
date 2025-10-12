import { HTMLDocumentViewer, PDFDocumentViewer } from "./factory_class";
import { DocumentContent } from "./product_interface";


export const runFactoryMethod = async (
   type: 'pdf' | 'html' | 'all' = 'all',
   destination: string = "./default_destination", 
   content: DocumentContent = "hello world", 
) => {
   console.log("Creating renderer objects using factory classes ⚒️!!");
   let pdfDocumentViewer: PDFDocumentViewer;
   let htmlDocumentViewer: HTMLDocumentViewer;
   let isRendered = false;
   
   switch(type) {
      case 'pdf':
         pdfDocumentViewer = new PDFDocumentViewer();
         isRendered = pdfDocumentViewer.render(destination, content);
      case 'html':
         htmlDocumentViewer = new HTMLDocumentViewer();
         isRendered = htmlDocumentViewer.render(destination, content);
      default:
         // PDF Viewer
         pdfDocumentViewer = new PDFDocumentViewer();
         isRendered = pdfDocumentViewer.render(destination, content);

         // HTML Viewer
         htmlDocumentViewer = new HTMLDocumentViewer();
         isRendered = htmlDocumentViewer.render(destination, content);
   }
   console.log("Destroying created objects using factory classes ❌!!");
   return isRendered;
}





// TODO: Use this in a seperate class.
// public createRendererGeneric(type: 'pdf' | 'html', destination: string): Renderer {
//    let renderer: Renderer;
//    switch(type) {
//       case 'pdf':
//          renderer = new PDFRenderer();
//          break;
//       case 'html':
//          renderer = new HTMLRenderer();
//          break;
//       default:
//          throw new Error(`Creating ${type} renderer is out of scope for this class`);
//    }

//    if(renderer) {
//       renderer.createRenderer(destination);
//    }

//    return renderer;
// }