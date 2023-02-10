import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [tools, setTools] = useState([
    "Tool 1",
    "Tool 2",
    "Tool 3",
    "Tool 4",
    "Tool 5"
  ]);
  const [selectedTools, setSelectedTools] = useState([]);

  const handleDragStart = (event, tool) => {
    event.dataTransfer.setData("tool", tool);
  };

  const handleDrop = event => {
    event.preventDefault();
    const tool = event.dataTransfer.getData("tool");
    setSelectedTools([...selectedTools, tool]);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  return (
    <div className="dashboard-container">
      {/* Tools Section */}
      <div className="tools-section">
        <h3 className="section-title">Tools</h3>
        <ul className="tools-list">
          {tools.map(tool => (
            <li
              key={tool}
              draggable
              onDragStart={event => handleDragStart(event, tool)}
              className="tool"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      {/* Drag and Drop Area */}
      <div
        className="drag-drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h3 className="section-title">Selected Tools</h3>
        <ul className="selected-tools-list">
          {selectedTools.map(tool => (
            <li key={tool} className="selected-tool">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
