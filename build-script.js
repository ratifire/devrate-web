const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const reactBuildPath = path.join(__dirname, 'build');
const serverBuildPath = path.join(__dirname, 'server-build');
const serverFilePath = path.join(serverBuildPath, 'server.js');
const packageFilePath = path.join(serverBuildPath, 'package.json');

// Utility to log messages
// eslint-disable-next-line no-console
const log = (message) => console.log(`\x1b[32m${message}\x1b[0m`); // Green color

// Step 1: Run React build
log('Building React application...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Prepare server-build directory
if (!fs.existsSync(serverBuildPath)) {
  log('Creating server-build directory...');
  fs.mkdirSync(serverBuildPath);
}

// Step 3: Copy React build to server-build/build
const serverBuildReactPath = path.join(serverBuildPath, 'build');
log('Copying React build to server-build/build directory...');
fs.cpSync(reactBuildPath, serverBuildReactPath, { recursive: true });

// Step 4: Create server.js file
if (!fs.existsSync(serverFilePath)) {
  log('Creating server.js...');
  const serverContent = `const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`;
  fs.writeFileSync(serverFilePath, serverContent);
  log('server.js created successfully.');
} else {
  log('server.js already exists, skipping creation.');
}

// Step 5: Create package.json for the server
if (!fs.existsSync(packageFilePath)) {
  log('Creating package.json for server...');
  const packageContent = {
    name: 'react-build-server',
    version: '1.0.0',
    main: 'server.js',
    scripts: {
      start: 'node server.js',
    },
    dependencies: {
      express: '^4.18.2',
    },
  };
  fs.writeFileSync(packageFilePath, JSON.stringify(packageContent, null, 2));
  log('package.json created successfully.');
} else {
  log('package.json already exists, skipping creation.');
}

// Step 6: Install server dependencies
log('Installing server dependencies...');
execSync('npm install', { cwd: serverBuildPath, stdio: 'inherit' });

// Step 7: Remove original React build directory
log('Removing original React build directory...');
fs.rmSync(reactBuildPath, { recursive: true, force: true });

log('Build process complete! All files are ready in the server-build directory.');
