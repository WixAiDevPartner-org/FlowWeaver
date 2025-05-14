from flask import Flask, request, jsonify
import random

# Sensory Input Data
sensations = {
    "visual": {"description": "Seeing a bright idea", "intensity": 0.8},
    "tactile": {"description": "Dragging a node", "intensity": 0.7},
    "auditory": {"description": "Hearing a suggestion", "intensity": 0.5}
}

# Cognitive States
cognitive_states = {
    "focused": {"description": "Concentrated awareness", "intensity": 0.6},
    "reflective": {"description": "Internal questioning", "intensity": 0.4},
    "uncertain": {"description": "Feeling of ambiguity", "intensity": 0.1}
}

# Processing Logic
def process_input(sensory_type):
    if sensory_type == "visual":
        return cognitive_states["focused"]
    elif sensory_type == "tactile":
        return cognitive_states["reflective"]
    elif sensory_type == "auditory":
        return cognitive_states["uncertain"]
    return cognitive_states["uncertain"]

# Flask App
app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_node():
    data = request.json
    sensory_type = data.get("sensory_type", "visual")
    cognitive_state = process_input(sensory_type)
    
    # Generate a node based on cognitive state
    node = {
        "title": f"Node for {cognitive_state['description']}",
        "state": cognitive_state
    }
    return jsonify(node)

if __name__ == '__main__':
    app.run(debug=True)
