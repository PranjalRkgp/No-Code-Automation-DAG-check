import React, { useState } from "react";
import PipelineToolbar from "./PipelineToolbar";
import PipelineUI from "./PipelineUI";
import SubmitButton from "./SubmitButton";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div>
      <h1>Pipeline Builder</h1>
      <PipelineToolbar setNodes={setNodes} nodes={nodes} />
      <PipelineUI nodes={nodes} edges={edges} setEdges={setEdges} />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
