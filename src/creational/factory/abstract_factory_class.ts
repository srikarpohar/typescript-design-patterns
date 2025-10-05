// Factory class which creates document based on given product subclass
import { DocumentContent, Renderer } from "./product_interface";

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
