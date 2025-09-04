import React from "react";

function SubmitButton({ nodes, edges }) {
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://no-code-automation-dag-check.vercel.app/pipelines/parse", // 👈 Replace with your backend URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nodes, edges }),
        }
      );
      const data = await response.json();
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error submitting pipeline:", error);
    }
  };

  return <button onClick={handleSubmit}>Submit Pipeline</button>;
}

export default SubmitButton;
