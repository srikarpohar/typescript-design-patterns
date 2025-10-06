import { HTMLDocumentViewer, PDFDocumentViewer } from "./concrete_factory_class";
import { DocumentContent } from "./product_interface";


export const runFactoryMethod = async (
   type: 'pdf' | 'html' | 'all' = 'all',
   destination: string = "./default_destination", 
   content: DocumentContent = "hello world", 
) => {
   console.log("Creating renderer objects using factory classes ⚒️!!");
   let pdfDocumentViewer: PDFDocumentViewer;
   let htmlDocumentViewer: HTMLDocumentViewer;
   
   switch(type) {
      case 'pdf':
         pdfDocumentViewer = new PDFDocumentViewer();
         pdfDocumentViewer.render(destination, content);
         break;
      case 'html':
         htmlDocumentViewer = new HTMLDocumentViewer();
         htmlDocumentViewer.render(destination, content);
         break;
      default:
         // PDF Viewer
         pdfDocumentViewer = new PDFDocumentViewer();
         pdfDocumentViewer.render(destination, content);

         // HTML Viewer
         htmlDocumentViewer = new HTMLDocumentViewer();
         htmlDocumentViewer.render(destination, content);
         break;
   }
   console.log("Destroying created objects using factory classes ❌!!");
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