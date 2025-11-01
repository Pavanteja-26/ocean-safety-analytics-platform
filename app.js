// Application data from JSON
const appData = {
  "oceanHazardReports": [
    {
      "id": 1,
      "type": "tsunami",
      "location": {"lat": 13.0827, "lng": 80.2707, "name": "Chennai Coast"},
      "severity": "high",
      "timestamp": "2025-09-26T18:30:00Z",
      "reporter": "Coastal Guard Station",
      "description": "Unusual sea level rise observed, immediate evacuation recommended",
      "status": "verified",
      "mediaCount": 3
    },
    {
      "id": 2,
      "type": "storm_surge",
      "location": {"lat": 19.0760, "lng": 72.8777, "name": "Mumbai Harbor"},
      "severity": "moderate",
      "timestamp": "2025-09-26T17:45:00Z",
      "reporter": "Local Fisherman",
      "description": "High waves and strong currents affecting fishing operations",
      "status": "under_review",
      "mediaCount": 1
    },
    {
      "id": 3,
      "type": "high_waves",
      "location": {"lat": 15.2993, "lng": 74.1240, "name": "Goa Beach"},
      "severity": "low",
      "timestamp": "2025-09-26T16:20:00Z",
      "reporter": "Tourist",
      "description": "Waves higher than normal, beach activities restricted",
      "status": "verified",
      "mediaCount": 2
    },
    {
      "id": 4,
      "type": "coastal_flooding",
      "location": {"lat": 11.9416, "lng": 79.8083, "name": "Puducherry"},
      "severity": "moderate",
      "timestamp": "2025-09-26T15:10:00Z",
      "reporter": "Emergency Services",
      "description": "Coastal road flooded due to abnormal tide levels",
      "status": "verified",
      "mediaCount": 4
    }
  ],
  "socialMediaPosts": [
    {
      "id": 1,
      "platform": "twitter",
      "content": "Massive waves hitting Chennai marina beach! Stay away from the shore #TsunamiAlert #ChennaiFloods",
      "sentiment": "urgent",
      "location": "Chennai",
      "timestamp": "2025-09-26T18:45:00Z",
      "engagement": 245,
      "verified": true
    },
    {
      "id": 2,
      "platform": "facebook",
      "content": "मुंबई के समुद्री तट पर असामान्य लहरें देखी जा रही हैं। सभी से अनुरोध है कि सुरक्षित रहें।",
      "sentiment": "cautious",
      "location": "Mumbai",
      "timestamp": "2025-09-26T17:30:00Z",
      "engagement": 89,
      "verified": false
    },
    {
      "id": 3,
      "platform": "youtube",
      "content": "Live footage of unusual tidal behavior in Goa beaches - authorities advising caution",
      "sentiment": "informative",
      "location": "Goa",
      "timestamp": "2025-09-26T16:00:00Z",
      "engagement": 1024,
      "verified": true
    }
  ],
  "analytics": {
    "totalReports": 156,
    "verifiedReports": 89,
    "activeHotspots": 7,
    "averageResponseTime": "12 minutes",
    "topHazardTypes": [
      {"type": "high_waves", "count": 45},
      {"type": "storm_surge", "count": 32},
      {"type": "coastal_flooding", "count": 28},
      {"type": "tsunami", "count": 15}
    ],
    "regionalStats": [
      {"region": "Tamil Nadu", "reports": 42},
      {"region": "Maharashtra", "reports": 38},
      {"region": "Goa", "reports": 25},
      {"region": "Kerala", "reports": 23}
    ]
  },
  "earlyWarnings": [
    {
      "id": 1,
      "type": "tsunami",
      "severity": "critical",
      "region": "East Coast",
      "message": "Tsunami warning issued for Tamil Nadu and Andhra Pradesh coastlines. Immediate evacuation recommended.",
      "issuedAt": "2025-09-26T18:00:00Z",
      "validUntil": "2025-09-27T06:00:00Z",
      "status": "active"
    },
    {
      "id": 2,
      "type": "storm_surge",
      "severity": "moderate",
      "region": "West Coast",
      "message": "Storm surge expected along Maharashtra and Goa coasts. Fishing operations suspended.",
      "issuedAt": "2025-09-26T15:30:00Z",
      "validUntil": "2025-09-26T23:30:00Z",
      "status": "active"
    }
  ]
};

// Global variables
let map;
let hotspotMap;
let hazardChart;
let regionalChart;
let trendChart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeDashboard();
  initializeForms();
  initializeCharts();
  initializeSocialFeed();
  initializeWarnings();
  setupEventListeners();
  
  // Show dashboard by default
  showPage('dashboard');
});

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const pageId = this.dataset.page;
      console.log('Navigating to page:', pageId); // Debug log
      
      // Ensure we have a valid pageId
      if (pageId) {
        showPage(pageId);
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      }
    });
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

function showPage(pageId) {
  console.log('Showing page:', pageId); // Debug log
  
  // Hide all pages first
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    console.log('Successfully showed page:', pageId); // Debug log
    
    // Initialize page-specific functionality
    setTimeout(() => {
      switch(pageId) {
        case 'dashboard':
          initializeMap();
          break;
        case 'hotspot-analysis':
          initializeHotspotMap();
          break;
        case 'analytics':
          refreshCharts();
          break;
      }
    }, 100); // Small delay to ensure DOM is ready
  } else {
    console.error('Page not found:', pageId); // Debug log
  }
}

// Dashboard functionality
function initializeDashboard() {
  updateDashboardStats();
  loadRecentReports();
  
  // Set up refresh functionality
  const refreshButton = document.getElementById('refreshData');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      updateLastUpdated();
      updateDashboardStats();
      loadRecentReports();
      if (map) {
        refreshMapData();
      }
    });
  }

  // Set up map filters
  const filterButtons = ['filterAll', 'filterTsunami', 'filterSurge', 'filterWaves'];
  filterButtons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', function() {
        // Remove active state from all filter buttons
        filterButtons.forEach(id => {
          const btn = document.getElementById(id);
          if (btn) btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Apply filter logic here
        const filterType = buttonId.replace('filter', '').toLowerCase();
        filterMapData(filterType);
      });
    }
  });
}

function updateDashboardStats() {
  const totalReportsEl = document.getElementById('totalReports');
  const activeAlertsEl = document.getElementById('activeAlerts');
  const verifiedReportsEl = document.getElementById('verifiedReports');
  const responseTimeEl = document.getElementById('responseTime');
  
  if (totalReportsEl) totalReportsEl.textContent = appData.analytics.totalReports;
  if (activeAlertsEl) activeAlertsEl.textContent = appData.earlyWarnings.length;
  if (verifiedReportsEl) verifiedReportsEl.textContent = appData.analytics.verifiedReports;
  if (responseTimeEl) responseTimeEl.textContent = appData.analytics.averageResponseTime;
}

function updateLastUpdated() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const lastUpdatedEl = document.getElementById('lastUpdated');
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = timeString;
  }
}

function loadRecentReports() {
  const recentReportsContainer = document.getElementById('recentReports');
  if (recentReportsContainer) {
    recentReportsContainer.innerHTML = '';

    appData.oceanHazardReports.slice(0, 4).forEach(report => {
      const reportElement = createReportElement(report);
      recentReportsContainer.appendChild(reportElement);
    });
  }
}

function createReportElement(report) {
  const reportDiv = document.createElement('div');
  reportDiv.className = 'report-item';
  
  const severityClass = {
    'low': 'status--success',
    'moderate': 'status--warning',
    'high': 'status--error',
    'critical': 'status--error'
  }[report.severity] || 'status--info';

  const timeAgo = getTimeAgo(new Date(report.timestamp));

  reportDiv.innerHTML = `
    <div class="report-info">
      <h4>${formatHazardType(report.type)} - ${report.location.name}</h4>
      <p>${report.description}</p>
    </div>
    <div class="report-meta">
      <div class="report-time">${timeAgo}</div>
      <span class="status ${severityClass}">${report.severity}</span>
    </div>
  `;

  return reportDiv;
}

// Map functionality
function initializeMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;
  
  if (!map) {
    try {
      map = L.map('map').setView([15.8700, 74.8400], 6);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Add hazard markers
      addHazardMarkers(map, appData.oceanHazardReports);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
}

function initializeHotspotMap() {
  const mapContainer = document.getElementById('hotspotMap');
  if (!mapContainer) return;
  
  if (!hotspotMap) {
    try {
      hotspotMap = L.map('hotspotMap').setView([15.8700, 74.8400], 6);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(hotspotMap);
      
      // Add hotspot overlays
      addHotspotOverlays(hotspotMap);
    } catch (error) {
      console.error('Error initializing hotspot map:', error);
    }
  }
}

function addHazardMarkers(mapInstance, reports) {
  reports.forEach(report => {
    const color = getMarkerColor(report.type, report.severity);
    const marker = L.circleMarker([report.location.lat, report.location.lng], {
      color: color,
      fillColor: color,
      fillOpacity: 0.6,
      radius: getSeverityRadius(report.severity)
    }).addTo(mapInstance);
    
    marker.bindPopup(`
      <div class="marker-popup">
        <h4>${formatHazardType(report.type)}</h4>
        <p><strong>Location:</strong> ${report.location.name}</p>
        <p><strong>Severity:</strong> ${report.severity}</p>
        <p><strong>Reporter:</strong> ${report.reporter}</p>
        <p><strong>Time:</strong> ${getTimeAgo(new Date(report.timestamp))}</p>
        <p>${report.description}</p>
        <div class="marker-status">Status: <span class="status status--${report.status === 'verified' ? 'success' : 'warning'}">${report.status}</span></div>
      </div>
    `);
  });
}

function addHotspotOverlays(mapInstance) {
  // Simulate hotspot data
  const hotspots = [
    { center: [13.0827, 80.2707], radius: 50000, intensity: 0.8 },
    { center: [19.0760, 72.8777], radius: 30000, intensity: 0.6 },
    { center: [15.2993, 74.1240], radius: 20000, intensity: 0.4 }
  ];

  hotspots.forEach(hotspot => {
    L.circle(hotspot.center, {
      color: '#ff6b6b',
      fillColor: '#ff6b6b',
      fillOpacity: hotspot.intensity * 0.3,
      radius: hotspot.radius
    }).addTo(mapInstance);
  });
}

function getMarkerColor(type, severity) {
  const colors = {
    tsunami: { low: '#3498db', moderate: '#f39c12', high: '#e74c3c', critical: '#8b0000' },
    storm_surge: { low: '#2ecc71', moderate: '#f39c12', high: '#e74c3c', critical: '#8b0000' },
    high_waves: { low: '#9b59b6', moderate: '#f39c12', high: '#e74c3c', critical: '#8b0000' },
    coastal_flooding: { low: '#1abc9c', moderate: '#f39c12', high: '#e74c3c', critical: '#8b0000' }
  };
  return colors[type]?.[severity] || '#95a5a6';
}

function getSeverityRadius(severity) {
  const radii = { low: 8, moderate: 12, high: 16, critical: 20 };
  return radii[severity] || 10;
}

function refreshMapData() {
  if (map) {
    map.eachLayer(layer => {
      if (layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });
    addHazardMarkers(map, appData.oceanHazardReports);
  }
}

function filterMapData(filterType) {
  if (!map) return;
  
  // Remove existing markers
  map.eachLayer(layer => {
    if (layer instanceof L.CircleMarker) {
      map.removeLayer(layer);
    }
  });
  
  // Add filtered markers
  let filteredReports = appData.oceanHazardReports;
  if (filterType !== 'all') {
    const filterMap = {
      tsunami: 'tsunami',
      surge: 'storm_surge', 
      waves: 'high_waves'
    };
    const actualFilter = filterMap[filterType];
    if (actualFilter) {
      filteredReports = appData.oceanHazardReports.filter(report => report.type === actualFilter);
    }
  }
  
  addHazardMarkers(map, filteredReports);
}

// Forms functionality
function initializeForms() {
  // Report submission form
  const reportForm = document.getElementById('reportForm');
  if (reportForm) {
    reportForm.addEventListener('submit', function(e) {
      e.preventDefault();
      submitReport();
    });
  }

  // GPS location button
  const gpsButton = document.getElementById('useGPS');
  if (gpsButton) {
    gpsButton.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            const locationInput = document.getElementById('reportLocation');
            if (locationInput) {
              locationInput.value = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            }
          },
          error => {
            alert('Unable to get location. Please enter manually.');
          }
        );
      }
    });
  }

  // Draft saving
  const saveDraftButton = document.getElementById('saveDraft');
  if (saveDraftButton) {
    saveDraftButton.addEventListener('click', function() {
      saveDraft();
    });
  }

  // New warning form
  const newWarningForm = document.getElementById('newWarningForm');
  if (newWarningForm) {
    newWarningForm.addEventListener('submit', function(e) {
      e.preventDefault();
      issueNewWarning();
    });
  }
}

function submitReport() {
  const formData = {
    type: document.getElementById('hazardType')?.value,
    location: document.getElementById('reportLocation')?.value,
    severity: document.getElementById('severityLevel')?.value,
    description: document.getElementById('reportDescription')?.value,
    contact: document.getElementById('contactInfo')?.value,
    media: document.getElementById('mediaUpload')?.files
  };

  // Simulate form submission
  showNotification('Report submitted successfully! Thank you for your contribution.', 'success');
  const form = document.getElementById('reportForm');
  if (form) {
    form.reset();
  }
}

function saveDraft() {
  showNotification('Draft saved successfully!', 'info');
}

function showNotification(message, type) {
  // Simple notification implementation
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'});
    color: white;
    z-index: 1001;
    animation: fadeIn 0.3s ease-in-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Charts functionality
function initializeCharts() {
  // Hazard Types Chart
  const hazardCtx = document.getElementById('hazardChart');
  if (hazardCtx) {
    hazardChart = new Chart(hazardCtx, {
      type: 'doughnut',
      data: {
        labels: appData.analytics.topHazardTypes.map(item => formatHazardType(item.type)),
        datasets: [{
          data: appData.analytics.topHazardTypes.map(item => item.count),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Regional Chart
  const regionalCtx = document.getElementById('regionalChart');
  if (regionalCtx) {
    regionalChart = new Chart(regionalCtx, {
      type: 'bar',
      data: {
        labels: appData.analytics.regionalStats.map(item => item.region),
        datasets: [{
          label: 'Reports',
          data: appData.analytics.regionalStats.map(item => item.reports),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Trend Chart
  const trendCtx = document.getElementById('trendChart');
  if (trendCtx) {
    trendChart = new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Total Reports',
          data: [12, 19, 8, 15, 23, 18],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function refreshCharts() {
  if (hazardChart) hazardChart.update();
  if (regionalChart) regionalChart.update();
  if (trendChart) trendChart.update();
}

// Social Media Feed
function initializeSocialFeed() {
  const socialFeed = document.getElementById('socialFeed');
  if (socialFeed) {
    loadSocialPosts();
  }

  // Set up filters
  const keywordFilter = document.getElementById('keywordFilter');
  const platformFilter = document.getElementById('platformFilter');
  
  if (keywordFilter) {
    keywordFilter.addEventListener('input', filterSocialPosts);
  }
  
  if (platformFilter) {
    platformFilter.addEventListener('change', filterSocialPosts);
  }
}

function loadSocialPosts() {
  const socialFeed = document.getElementById('socialFeed');
  if (socialFeed) {
    socialFeed.innerHTML = '';

    appData.socialMediaPosts.forEach(post => {
      const postElement = createSocialPostElement(post);
      socialFeed.appendChild(postElement);
    });
  }
}

function createSocialPostElement(post) {
  const postDiv = document.createElement('div');
  postDiv.className = 'social-post';
  
  const timeAgo = getTimeAgo(new Date(post.timestamp));
  const platformIcon = {
    twitter: '🐦',
    facebook: '📘', 
    youtube: '📺'
  }[post.platform] || '🌐';

  postDiv.innerHTML = `
    <div class="post-header">
      <div class="post-platform">${platformIcon} ${post.platform}</div>
      <div class="post-time">${timeAgo}</div>
    </div>
    <div class="post-content">${post.content}</div>
    <div class="post-meta">
      <div class="post-engagement">👍 ${post.engagement} engagements</div>
      <div class="post-verified ${post.verified ? 'post-verified' : ''}">${post.verified ? '✅ Verified' : '⚠️ Unverified'}</div>
    </div>
  `;

  return postDiv;
}

function filterSocialPosts() {
  const keywordEl = document.getElementById('keywordFilter');
  const platformEl = document.getElementById('platformFilter');
  
  const keyword = keywordEl ? keywordEl.value.toLowerCase() : '';
  const platform = platformEl ? platformEl.value : '';
  
  let filteredPosts = appData.socialMediaPosts;
  
  if (keyword) {
    filteredPosts = filteredPosts.filter(post => 
      post.content.toLowerCase().includes(keyword)
    );
  }
  
  if (platform) {
    filteredPosts = filteredPosts.filter(post => post.platform === platform);
  }
  
  const socialFeed = document.getElementById('socialFeed');
  if (socialFeed) {
    socialFeed.innerHTML = '';
    
    filteredPosts.forEach(post => {
      const postElement = createSocialPostElement(post);
      socialFeed.appendChild(postElement);
    });
  }
}

// Early Warning System
function initializeWarnings() {
  loadActiveWarnings();
}

function loadActiveWarnings() {
  const warningsContainer = document.getElementById('activeWarnings');
  if (!warningsContainer) return;
  
  const warningsList = warningsContainer.querySelector('.warning-list') || createWarningsList(warningsContainer);
  
  warningsList.innerHTML = '';

  appData.earlyWarnings.forEach(warning => {
    const warningElement = createWarningElement(warning);
    warningsList.appendChild(warningElement);
  });
}

function createWarningsList(container) {
  const warningsList = document.createElement('div');
  warningsList.className = 'warning-list';
  container.appendChild(warningsList);
  return warningsList;
}

function createWarningElement(warning) {
  const warningDiv = document.createElement('div');
  warningDiv.className = 'warning-item';
  
  const issuedTime = getTimeAgo(new Date(warning.issuedAt));
  const validUntil = new Date(warning.validUntil).toLocaleString();

  warningDiv.innerHTML = `
    <div class="warning-header">
      <div class="warning-type">${formatHazardType(warning.type)} Warning</div>
      <div class="warning-severity">${warning.severity}</div>
    </div>
    <div class="warning-message">${warning.message}</div>
    <div class="warning-meta">
      <div>Region: ${warning.region}</div>
      <div>Valid until: ${validUntil}</div>
      <div>Issued: ${issuedTime}</div>
    </div>
  `;

  return warningDiv;
}

function issueNewWarning() {
  showNotification('New warning issued successfully!', 'success');
  const form = document.getElementById('newWarningForm');
  const warningForm = document.getElementById('warningForm');
  
  if (form) form.reset();
  if (warningForm) warningForm.classList.add('hidden');
}

// Utility functions
function formatHazardType(type) {
  const typeMap = {
    tsunami: 'Tsunami',
    storm_surge: 'Storm Surge',
    high_waves: 'High Waves',
    coastal_flooding: 'Coastal Flooding',
    abnormal_tide: 'Abnormal Tide'
  };
  return typeMap[type] || type;
}

function getTimeAgo(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

// Event Listeners
function setupEventListeners() {
  // Language selector
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      changeLanguage(this.value);
    });
  }

  // Issue alert button
  const issueAlertButton = document.getElementById('issueAlert');
  if (issueAlertButton) {
    issueAlertButton.addEventListener('click', function() {
      const warningForm = document.getElementById('warningForm');
      if (warningForm) {
        warningForm.classList.toggle('hidden');
      }
    });
  }

  // Cancel warning button
  const cancelWarningButton = document.getElementById('cancelWarning');
  if (cancelWarningButton) {
    cancelWarningButton.addEventListener('click', function() {
      const warningForm = document.getElementById('warningForm');
      if (warningForm) {
        warningForm.classList.add('hidden');
      }
    });
  }

  // Export data button
  const exportDataButton = document.getElementById('exportData');
  if (exportDataButton) {
    exportDataButton.addEventListener('click', function() {
      exportAnalyticsData();
    });
  }

  // Add user button
  const addUserButton = document.getElementById('addUser');
  if (addUserButton) {
    addUserButton.addEventListener('click', function() {
      showNotification('Add user functionality would open a modal here', 'info');
    });
  }

  // Generate hotspots button
  const generateHotspotsButton = document.getElementById('generateHotspots');
  if (generateHotspotsButton) {
    generateHotspotsButton.addEventListener('click', function() {
      generateHotspots();
    });
  }

  // Modal functionality
  const alertModal = document.getElementById('alertModal');
  const closeAlert = document.getElementById('closeAlert');
  const acknowledgeAlert = document.getElementById('acknowledgeAlert');
  
  if (closeAlert) {
    closeAlert.addEventListener('click', function() {
      if (alertModal) {
        alertModal.classList.add('hidden');
      }
    });
  }
  
  if (acknowledgeAlert) {
    acknowledgeAlert.addEventListener('click', function() {
      if (alertModal) {
        alertModal.classList.add('hidden');
      }
      showNotification('Alert acknowledged', 'success');
    });
  }

  // Settings
  const settingsInputs = ['defaultLanguage', 'refreshInterval', 'emailNotifications', 'smsNotifications', 'pushNotifications'];
  settingsInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('change', function() {
        showNotification('Settings updated', 'success');
      });
    }
  });
}

function changeLanguage(language) {
  // Simulate language change
  showNotification(`Language changed to ${language}`, 'success');
  
  const logoSubtitle = document.querySelector('.logo-subtitle');
  if (logoSubtitle) {
    if (language === 'hindi') {
      logoSubtitle.textContent = 'समुद्री सूचना सेवाएं';
    } else {
      logoSubtitle.textContent = 'Ocean Information Services';
    }
  }
}

function exportAnalyticsData() {
  // Simulate data export
  const data = JSON.stringify(appData.analytics, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'incois_analytics_data.json';
  a.click();
  URL.revokeObjectURL(url);
  
  showNotification('Analytics data exported successfully', 'success');
}

function generateHotspots() {
  showNotification('Generating hotspots based on current data...', 'info');
  
  setTimeout(() => {
    showNotification('Hotspot analysis complete! 7 active hotspots identified.', 'success');
  }, 2000);
}

// Simulate real-time updates
function startRealTimeUpdates() {
  setInterval(() => {
    // Update notification count
    const notificationCount = document.getElementById('notificationCount');
    if (notificationCount) {
      const currentCount = parseInt(notificationCount.textContent);
      notificationCount.textContent = currentCount + Math.floor(Math.random() * 3);
    }
    
    // Update last updated time
    updateLastUpdated();
  }, 30000); // Update every 30 seconds
}

// Start real-time updates
startRealTimeUpdates();

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  if (map) {
    setTimeout(() => map.invalidateSize(), 100);
  }
  if (hotspotMap) {
    setTimeout(() => hotspotMap.invalidateSize(), 100);
  }
});

// Simulate emergency alert
setTimeout(() => {
  const alertModal = document.getElementById('alertModal');
  const alertTitle = document.getElementById('alertTitle');
  const alertMessage = document.getElementById('alertMessage');
  
  if (alertModal && alertTitle && alertMessage && appData.earlyWarnings.length > 0) {
    const criticalWarning = appData.earlyWarnings.find(w => w.severity === 'critical');
    if (criticalWarning) {
      alertTitle.textContent = `${formatHazardType(criticalWarning.type)} Alert`;
      alertMessage.textContent = criticalWarning.message;
      alertModal.classList.remove('hidden');
    }
  }
}, 5000); // Show alert after 5 seconds