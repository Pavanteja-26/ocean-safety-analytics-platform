// Application data - Ocean Hazard Monitoring System
const appData = {
  // Ocean hazard reports data
  oceanHazardReports: [
    {
      id: 1,
      type: 'tsunami',
      location: {
        name: 'Chennai Coast',
        lat: 13.0827,
        lng: 80.2707
      },
      severity: 'high',
      description: 'Unusual wave patterns observed near Chennai harbor. Local fishermen report abnormal sea behavior.',
      reporter: 'Fishermen Association',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      status: 'verified',
      contactInfo: '+91-9876543210',
      mediaCount: 3
    },
    {
      id: 2,
      type: 'storm_surge',
      location: {
        name: 'Mumbai Harbor',
        lat: 19.0760,
        lng: 72.8777
      },
      severity: 'moderate',
      description: 'Storm surge warning issued for Mumbai coastal areas. Water levels rising above normal.',
      reporter: 'Coast Guard',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      status: 'under_review',
      contactInfo: 'coastguard@navy.gov.in',
      mediaCount: 1
    },
    {
      id: 3,
      type: 'high_waves',
      location: {
        name: 'Goa Beach',
        lat: 15.2993,
        lng: 74.1240
      },
      severity: 'low',
      description: 'High waves reported at popular beaches. Tourists advised to maintain distance from shoreline.',
      reporter: 'Beach Safety Team',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      status: 'verified',
      contactInfo: 'safety@goatourism.gov.in',
      mediaCount: 2
    },
    {
      id: 4,
      type: 'coastal_flooding',
      location: {
        name: 'Visakhapatnam',
        lat: 17.6868,
        lng: 83.2185
      },
      severity: 'critical',
      description: 'Severe coastal flooding reported in Visakhapatnam port area. Evacuation procedures initiated.',
      reporter: 'Port Authority',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      status: 'verified',
      contactInfo: 'emergency@vizagport.com',
      mediaCount: 4
    },
    {
      id: 5,
      type: 'abnormal_tide',
      location: {
        name: 'Puducherry',
        lat: 11.9416,
        lng: 79.8083
      },
      severity: 'moderate',
      description: 'Abnormally high tides observed in Puducherry. Local authorities monitoring the situation.',
      reporter: 'Local Administration',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      status: 'under_review',
      contactInfo: 'admin@puducherry.gov.in',
      mediaCount: 2
    },
    {
      id: 6,
      type: 'tsunami',
      location: {
        name: 'Kochi Port',
        lat: 9.9312,
        lng: 76.2673
      },
      severity: 'low',
      description: 'Minor seismic activity detected underwater. Monitoring for potential tsunami risk.',
      reporter: 'Seismic Monitoring Station',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      status: 'verified',
      contactInfo: 'seismic@incois.gov.in',
      mediaCount: 1
    }
  ],

  // Social media posts data
  socialMediaPosts: [
    {
      id: 1,
      platform: 'twitter',
      content: 'Huge waves hitting Chennai marina beach! Never seen anything like this before. #ChennaiWaves #OceanAlert',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      engagement: 245,
      verified: false,
      location: 'Chennai, Tamil Nadu',
      sentiment: 'urgent'
    },
    {
      id: 2,
      platform: 'facebook',
      content: 'Mumbai coast guard has issued storm surge warning. All fishing boats advised to return immediately. Official source confirmed.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      engagement: 892,
      verified: true,
      location: 'Mumbai, Maharashtra',
      sentiment: 'cautious'
    },
    {
      id: 3,
      platform: 'youtube',
      content: 'LIVE: Unusual tide patterns at Visakhapatnam beach - Local news coverage',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      engagement: 1567,
      verified: true,
      location: 'Visakhapatnam, Andhra Pradesh',
      sentiment: 'informative'
    },
    {
      id: 4,
      platform: 'twitter',
      content: 'Water levels rising abnormally at Goa beaches. Tourists being evacuated as precautionary measure.',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      engagement: 156,
      verified: false,
      location: 'Goa',
      sentiment: 'cautious'
    },
    {
      id: 5,
      platform: 'facebook',
      content: 'Fishermen report strange sea behavior near Puducherry coast. Waves much higher than usual for this season.',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      engagement: 78,
      verified: false,
      location: 'Puducherry',
      sentiment: 'informative'
    }
  ],

  // Early warnings data
  earlyWarnings: [
    {
      id: 1,
      type: 'tsunami',
      severity: 'critical',
      region: 'East Coast - Tamil Nadu & Andhra Pradesh',
      message: 'TSUNAMI WATCH issued for East Coast. Potential tsunami threat detected. Coastal areas advised to move to higher ground immediately.',
      issuedAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      validUntil: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      priority: 'urgent',
      status: 'active'
    },
    {
      id: 2,
      type: 'storm_surge',
      severity: 'high',
      region: 'West Coast - Maharashtra & Goa',
      message: 'STORM SURGE WARNING for West Coast. Significant storm surge expected due to cyclonic activity. Coastal evacuation recommended.',
      issuedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      validUntil: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
      priority: 'high',
      status: 'active'
    },
    {
      id: 3,
      type: 'high_waves',
      severity: 'moderate',
      region: 'Southwest Coast - Kerala',
      message: 'HIGH WAVE ALERT for Kerala coast. Wave heights expected to reach 3-4 meters. Fishing activities suspended.',
      issuedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      validUntil: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
      priority: 'medium',
      status: 'active'
    },
    {
      id: 4,
      type: 'coastal_flooding',
      severity: 'high',
      region: 'East Coast - Odisha',
      message: 'COASTAL FLOODING WARNING for Odisha. High tide combined with heavy rainfall causing severe flooding in low-lying areas.',
      issuedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      validUntil: new Date(Date.now() + 10 * 60 * 60 * 1000), // 10 hours from now
      priority: 'high',
      status: 'active'
    },
    {
      id: 5,
      type: 'abnormal_tide',
      severity: 'low',
      region: 'Southeast Coast - Tamil Nadu',
      message: 'ABNORMAL TIDE ADVISORY for Tamil Nadu coast. Slightly elevated tide levels observed. Monitor conditions.',
      issuedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      validUntil: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
      priority: 'low',
      status: 'active'
    }
  ],

  // User management data
  users: [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'administrator',
      location: 'INCOIS, Hyderabad',
      status: 'active',
      lastActive: '2 minutes ago',
      permissions: ['all']
    },
    {
      id: 2,
      name: 'Smt. Priya Sharma',
      role: 'analyst',
      location: 'Chennai Regional Center',
      status: 'active',
      lastActive: '15 minutes ago',
      permissions: ['view', 'analyze']
    },
    {
      id: 3,
      name: 'Capt. Vikram Singh',
      role: 'official',
      location: 'Mumbai Coast Guard',
      status: 'active',
      lastActive: '1 hour ago',
      permissions: ['view', 'report', 'warn']
    },
    {
      id: 4,
      name: 'Dr. Meera Nair',
      role: 'coordinator',
      location: 'Kochi Marine Station',
      status: 'inactive',
      lastActive: '1 day ago',
      permissions: ['view', 'coordinate']
    },
    {
      id: 5,
      name: 'Shri Ravi Patel',
      role: 'analyst',
      location: 'Visakhapatnam Port',
      status: 'active',
      lastActive: '30 minutes ago',
      permissions: ['view', 'analyze']
    },
    {
      id: 6,
      name: 'Ms. Anjali Reddy',
      role: 'official',
      location: 'Puducherry Admin',
      status: 'active',
      lastActive: '45 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 7,
      name: 'Mr. M Pavan Teja',
      role: 'official',
      location: 'Andhra Admin',
      status: 'active',
      lastActive: '45 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 8,
      name: 'Mr. B Kiran Teja',
      role: 'user',
      location: 'Visakapatnam Local',
      status: 'active',
      lastActive: '26 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 9,
      name: 'Mr.P Chaithanya',
      role: 'user',
      location: 'Visakapatnam Local',
      status: 'Inactive',
      lastActive: '26 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 10,
      name: 'Mrs. V Jaya Sri',
      role: 'user',
      location: 'vijayawada Local',
      status: 'active',
      lastActive: '36 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 11,
      name: 'Mrs. M Tejaswini',
      role: 'user',
      location: 'Amalapuram Local',
      status: 'active',
      lastActive: '55 minutes ago',
      permissions: ['view', 'report']
    },
    {
      id: 8,
      name: 'Mrs. SK.Gouseya',
      role: 'user',
      location: 'Visakapatnam Local',
      status: 'active',
      lastActive: '26 minutes ago',
      permissions: ['view', 'report']
    }
  ],

  // Analytics data
  analytics: {
    totalReports: 142,
    verifiedReports: 98,
    pendingReports: 44,
    averageResponseTime: '2.5m',
    
    topHazardTypes: [
      { type: 'high_waves', count: 45, percentage: 32 },
      { type: 'storm_surge', count: 38, percentage: 27 },
      { type: 'coastal_flooding', count: 32, percentage: 23 },
      { type: 'tsunami', count: 18, percentage: 13 },
      { type: 'abnormal_tide', count: 9, percentage: 5 }
    ],

    regionalStats: [
      { region: 'Tamil Nadu', reports: 38, trend: 'increasing' },
      { region: 'Maharashtra', reports: 32, trend: 'stable' },
      { region: 'Andhra Pradesh', reports: 28, trend: 'increasing' },
      { region: 'Kerala', reports: 24, trend: 'decreasing' },
      { region: 'Goa', reports: 12, trend: 'stable' },
      { region: 'Odisha', reports: 8, trend: 'increasing' }
    ],

    monthlyTrends: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: {
        totalReports: [12, 19, 8, 15, 23, 18],
        verifiedReports: [8, 15, 6, 12, 18, 14],
        falseAlarms: [4, 4, 2, 3, 5, 4]
      }
    },

    severityDistribution: {
      low: 45,
      moderate: 52,
      high: 35,
      critical: 10
    },

    responseMetrics: {
      averageVerificationTime: '1.8 hours',
      averageResolutionTime: '4.2 hours',
      userSatisfactionRate: '94%',
      systemUptime: '99.8%'
    }
  },

  // System settings
  settings: {
    defaultLanguage: 'english',
    refreshInterval: 30, // seconds
    notifications: {
      email: true,
      sms: false,
      push: true,
      desktop: true
    },
    mapSettings: {
      defaultZoom: 6,
      defaultCenter: [15.8700, 74.8400], // India center
      markerClustering: true,
      heatmapEnabled: false
    },
    alertThresholds: {
      tsunami: {
        low: 1,
        moderate: 2,
        high: 3,
        critical: 4
      },
      storm_surge: {
        low: 1.5,
        moderate: 2.5,
        high: 3.5,
        critical: 4.5
      },
      high_waves: {
        low: 2.0,
        moderate: 3.0,
        high: 4.0,
        critical: 5.0
      }
    }
  },

  // Emergency contacts
  emergencyContacts: [
    {
      name: 'INCOIS Emergency Hotline',
      phone: '+91-40-23886006',
      email: 'emergency@incois.gov.in',
      type: 'primary'
    },
    {
      name: 'Coast Guard Emergency',
      phone: '1554',
      email: 'emergency@indiancoastguard.gov.in',
      type: 'rescue'
    },
    {
      name: 'National Disaster Response Force',
      phone: '1070',
      email: 'control@ndrf.gov.in',
      type: 'disaster'
    },
    {
      name: 'Meteorological Department',
      phone: '+91-11-24626476',
      email: 'info@imd.gov.in',
      type: 'weather'
    }
  ],

  // System status
  systemStatus: {
    overallHealth: 'healthy',
    lastUpdate: new Date(),
    services: {
      dataCollection: 'operational',
      alertSystem: 'operational',
      mapServices: 'operational',
      socialMonitoring: 'operational',
      userManagement: 'operational',
      analytics: 'operational'
    },
    metrics: {
      uptime: '99.8%',
      responseTime: '120ms',
      activeUsers: 47,
      dataPointsCollected: 1567,
      alertsIssued: 23
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = appData;
}