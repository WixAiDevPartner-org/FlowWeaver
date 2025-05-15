#!/bin/bash

# Create config directory
mkdir -p config

# Create .env file
cat > .env << EOL
GOOGLE_APPLICATION_CREDENTIALS="./config/google-credentials.json"
EOL

# Create .env.example
cat > .env.example << EOL
GOOGLE_APPLICATION_CREDENTIALS="./config/google-credentials.json"
EOL

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    cat > .gitignore << EOL
.env
config/google-credentials.json
node_modules/
EOL
fi

echo "Please place your Google credentials JSON file in ./config/google-credentials.json"
export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/your/credentials.json"
