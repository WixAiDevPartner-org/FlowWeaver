import React from 'react';

interface ToolbarProps {
  onToolSelect: (tool: string) => void;
  onColorChange: (color: string) => void;
  onShapeSelect: (shape: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onToolSelect, onColorChange, onShapeSelect }) => {
  return (
    <div className="toolbar">
      <div className="drawing-tools">
        <button onClick={() => onToolSelect('pencil')}>✏️ Pencil</button>
        <button onClick={() => onToolSelect('eraser')}>⌫ Eraser</button>
        <button onClick={() => onShapeSelect('rectangle')}>⬜ Rectangle</button>
        <button onClick={() => onShapeSelect('circle')}>⭕ Circle</button>
        <button onClick={() => onToolSelect('text')}>T Text</button>
      </div>
      <div className="color-picker">
        <input
          type="color"
          onChange={(e) => onColorChange(e.target.value)}
          defaultValue="#000000"
        />
      </div>
      <div className="file-operations">
        <button onClick={() => {}}>💾 Save</button>
        <button onClick={() => {}}>📤 Export</button>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            // Handle image upload
          }}
        />
      </div>
    </div>
  );
};

export default Toolbar;
