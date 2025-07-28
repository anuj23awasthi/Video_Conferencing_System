// Configuration file for the application
export const config = {
  // Backend server URL - change this to match your backend server
  server_url: process.env.REACT_APP_SERVER_URL || "http://localhost:3001",
  
  // Socket.io configuration
  socket_config: {
    secure: false,
    transports: ['websocket', 'polling']
  }
};

// Export individual variables for convenience
export const server_url = config.server_url; 