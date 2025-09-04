import React, { useState } from "react";

function PipelineToolbar({ setNodes, nodes }) {
  const [nodeName, setNodeName] = useState("");

  const addNode = () => {
    if (!nodeName) return;
    const newNode = { id: `${nodes.length + 1}`, name: nodeName };
    setNodes([...nodes, newNode]);
    setNodeName("");
  };

  return (
    <div>
      <input
        type="text"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        placeholder="Node name"
      />
      <button onClick={addNode}>Add Node</button>
    </div>
  );
}

export default PipelineToolbar;
