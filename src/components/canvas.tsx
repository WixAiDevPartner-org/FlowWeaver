import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [drawingMode, setDrawingMode] = useState<'pencil' | 'eraser' | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
        width,
        height,
        isDrawingMode: true,
      });
      
      setCanvas(fabricCanvas);

      return () => {
        fabricCanvas.dispose();
      };
    }
  }, []);

  const handlePencilMode = () => {
    if (canvas) {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 2;
      canvas.freeDrawingBrush.color = '#000000';
      setDrawingMode('pencil');
    }
  };

  const handleEraserMode = () => {
    if (canvas) {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 20;
      canvas.freeDrawingBrush.color = '#ffffff';
      setDrawingMode('eraser');
    }
  };

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
      <div className="toolbar">
        <button onClick={handlePencilMode}>Pencil</button>
        <button onClick={handleEraserMode}>Eraser</button>
      </div>
    </div>
  );
};

export default Canvas;
