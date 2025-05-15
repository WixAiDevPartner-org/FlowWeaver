#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Whiteboard App Setup...${NC}"

# Create main project directory
echo -e "${GREEN}Creating project structure...${NC}"
mkdir -p whiteboard-app/client
mkdir -p whiteboard-app/server

# Navigate to project directory
cd whiteboard-app

# Setup Client
echo -e "${GREEN}Setting up client...${NC}"
cd client
npm init -y
npm install react react-dom typescript fabric @types/fabric socket.io-client @types/socket.io-client @types/react @types/react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
npm install --save-dev @babel/core @babel/preset-react @babel/preset-typescript

# Setup Server
echo -e "${GREEN}Setting up server...${NC}"
cd ../server
npm init -y
npm install express socket.io cors typescript ts-node @types/express @types/socket.io @types/cors
npm install --save-dev nodemon @types/node

echo -e "${BLUE}Setup completed!${NC}"
echo -e "${GREEN}You can now cd into whiteboard-app and start development${NC}"
