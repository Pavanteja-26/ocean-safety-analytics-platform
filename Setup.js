// setup.js - Initial setup script for Hazard Platform
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Hazard Platform...\n');

// Create necessary directories
const directories = ['uploads', 'logs'];

directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
    } else {
        console.log(`📁 Directory already exists: ${dir}`);
    }
});

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
    const envContent = `# Hazard Platform Environment Variables

# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
MONGODB_URI=mongodb+srv://pavantejamangaraju_db_user:hazardplatform123@hazardplatform.ilegxls.mongodb.net/hazardplatform?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=hazard-platform-super-secret-key-change-in-production-${Date.now()}
JWT_EXPIRES_IN=24h

# File Upload Configuration
MAX_FILE_SIZE=10485760
MAX_FILES=5

# Rate Limiting
AUTH_RATE_LIMIT=5
GENERAL_RATE_LIMIT=100

# Logging
LOG_LEVEL=info
`;

    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file with default configuration');
} else {
    console.log('📄 .env file already exists');
}

// Create a simple service worker for offline support
const swPath = path.join(__dirname, 'sw.js');
if (!fs.existsSync(swPath)) {
    const swContent = `// Service Worker for Hazard Platform
const CACHE_NAME = 'hazard-platform-v1';
const urlsToCache = [
    '/',
    '/login.html',
    '/index.html',
    '/style.css',
    '/script.js',
    '/data.js',
    '/translations.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Cache failed:', err))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});
`;

    fs.writeFileSync(swPath, swContent);
    console.log('✅ Created service worker for offline support');
} else {
    console.log('🔧 Service worker already exists');
}

// Create a simple health check script
const healthCheckPath = path.join(__dirname, 'health-check.js');
if (!fs.existsSync(healthCheckPath)) {
    const healthCheckContent = `// Health check script for monitoring
const http = require('http');

const options = {
    hostname: 'localhost',
    port: process.env.PORT || 3000,
    path: '/health',
    method: 'GET'
};

console.log('Checking server health...');

const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const health = JSON.parse(data);
            console.log('✅ Server Status:', health.status);
            console.log('🕒 Uptime:', health.uptime + ' seconds');
            console.log('💾 Database:', health.database);
            console.log('👥 Users:', health.users);
        } catch (error) {
            console.log('❌ Health check failed:', error.message);
        }
    });
});

req.on('error', (error) => {
    console.log('❌ Server not responding:', error.message);
    console.log('💡 Make sure the server is running with: npm start');
});

req.end();
`;

    fs.writeFileSync(healthCheckPath, healthCheckContent);
    console.log('✅ Created health check script');
}

// Validate package.json
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        console.log('✅ package.json is valid');
        console.log(`📦 Project: ${packageJson.name} v${packageJson.version}`);
    } catch (error) {
        console.log('❌ package.json is invalid:', error.message);
    }
} else {
    console.log('❌ package.json not found');
}

console.log('\n🎉 Setup completed successfully!');
console.log('\nNext steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Start the server: npm start');
console.log('3. Open http://localhost:3000 in your browser');
console.log('4. Check server health: node health-check.js');
console.log('\n📚 For development: npm run dev (with auto-reload)');