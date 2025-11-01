# 🌊 Integrated Platform for Crowdsourced Ocean Hazard Reporting and Social Media Analytics

**Smart India Hackathon (SIH) 2025 – Problem Statement ID: SIH25039**

## 🚀 Overview

This repository contains the project **Hazard Platform**, a comprehensive digital solution designed for real-time monitoring, reporting, and analysis of ocean-related hazards. The platform combines **crowdsourced reports**, **social media analytics**, and **early-warning intelligence** to support timely decision-making in coastal safety and disaster management.

## 📌 Features

* **Interactive Dashboard** – View hazard statistics, alerts, and visual maps.
* **Crowdsourced Reporting** – Citizens and officials can report hazards with media uploads and geolocation.
* **Social Media Monitor** – Automatically gather and analyze hazard-related posts from platforms like Twitter, Facebook, and YouTube.
* **Analytics Module** – Visualizes hazard types, regional stats, and temporal trends.
* **Early Warning System** – Create and broadcast hazard alerts with configurable severity and validity.
* **User Management** – Role-based access control (Admin, Analyst, Official, User)
* **Multi-language Support** – Switch UI dynamically across major Indian languages.

## 🛠️ Built With

| Technology            | Purpose                                      |
| --------------------- | -------------------------------------------- |
| **Node.js + Express** | Backend server and APIs                      |
| **MongoDB**           | Data storage (Hazard data, users, events)    |
| **Leaflet.js**        | Interactive mapping for hazards and hotspots |
| **Chart.js**          | Data visualizations (charting analytics)     |
| **JWT + bcrypt.js**   | Secure authentication                        |
| **Multer**            | Media upload handling                        |
| **HTML/CSS/JS**       | Client UI with responsive design             |

## 📂 Project Structure

```
├── index.html          # Main dashboard interface
├── login.html          # Authentication page
├── data.js             # Demo hazard and social media data
├── script.js           # Main client-side logic
├── app.js              # Application UI updates and interactions
├── translations.js     # Multi-language support
├── server.js           # Backend API and authentication server
├── style.css           # Global and responsive styles
├── package.json        # Project dependencies and scripts
├── Setup.js            # Setup scripts for environment
└── README.md           # You're reading this!
```

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Pavanteja-26/ocean-safety-analytics-platform

# Navigate into the project folder
cd hazard-platform

# Install dependencies
npm install

# Run setup
npm run setup

# Start the server
npm start
```

Visit the app at: `http://localhost:3000`

## 👤 User Roles

| Role     | Access Level                        |
| -------- | ----------------------------------- |
| Admin    | Full platform access                |
| Analyst  | Data and analytics privileges       |
| Official | Can issue alerts & moderate reports |
| User     | Submit hazards & view public data   |

## 🔐 Authentication

* JWT-based session management
* Rate limiting and request validation included
* Password hashing via bcrypt.js

## 🧪 Testing

```bash
npm test
```

## 📊 Future Enhancements

* Mobile app integration
* AI-based hazard prediction
* Real-time SMS alerts via APIs

## 📞 Contact

For contributions or queries regarding the SIH problem statement, feel free to reach out.
