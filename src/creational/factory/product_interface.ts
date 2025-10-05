export type DocumentContent = string | Buffer;

// Product interface
export interface Renderer {
   render(content: DocumentContent): boolean;
   createRenderer(destination: string): boolean;
}