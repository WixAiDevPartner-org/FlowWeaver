import React from 'react';
import './widgets.css';

const WidgetCard = ({ title, content }) => {
  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const WidgetContainer = () => {
  const widgets = [
    { id: 1, title: 'Widget 1', content: 'This is the content for Widget 1.' },
    { id: 2, title: 'Widget 2', content: 'This is the content for Widget 2.' },
    { id: 3, title: 'Widget 3', content: 'This is the content for Widget 3.' },
  ];

  return (
    <div className="widget-container">
      {widgets.map((widget) => (
        <WidgetCard key={widget.id} title={widget.title} content={widget.content} />
      ))}
    </div>
  );
};

export default WidgetContainer;
