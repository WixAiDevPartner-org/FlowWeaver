const sensations = {
    visual: { description: "Seeing a bright idea", intensity: 0.8 },
    tactile: { description: "Dragging a node", intensity: 0.7 },
    auditory: { description: "Hearing a suggestion", intensity: 0.5 }
};

const cognitiveStates = {
    focused: { description: "Concentrated awareness", intensity: 0.6 },
    reflective: { description: "Internal questioning", intensity: 0.4 },
    uncertain: { description: "Feeling of ambiguity", intensity: 0.1 }
};

function processInput(sensoryType) {
    switch (sensoryType) {
        case "visual": return cognitiveStates.focused;
        case "tactile": return cognitiveStates.reflective;
        case "auditory": return cognitiveStates.uncertain;
        default: return cognitiveStates.uncertain;
    }
}

// Example Usage
document.getElementById("generateButton").addEventListener("click", () => {
    const sensoryType = "visual"; // Example input
    const cognitiveState = processInput(sensoryType);
    console.log("Generated Node:", {
        title: `Node for ${cognitiveState.description}`,
        state: cognitiveState
    });
});
