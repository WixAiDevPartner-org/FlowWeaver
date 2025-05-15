export interface DrawingOptions {
  tool: 'pencil' | 'eraser' | 'shape' | 'text';
  color: string;
  thickness: number;
  shape?: 'rectangle' | 'circle' | 'line';
}

export interface WhiteboardState {
  elements: any[];
  currentTool: DrawingOptions;
  history: any[];
}
