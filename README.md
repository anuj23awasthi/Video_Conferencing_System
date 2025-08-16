
<p align="center">
	<img src="frontend/public/logo3.png" alt="Apna Video Call Logo" width="120" />
</p>

# 📹 Video Conferencing System

A real-time peer-to-peer video conferencing system built with MERN Stack, WebRTC, and Socket.IO, supporting secure authentication, encrypted calls, messaging, and screen sharing.

---

## 🚀 Features

- 🔑 Secure Authentication with JWT (encrypted user sessions)
- 🎥 Peer-to-Peer Video & Audio Calls using WebRTC
- 💬 Real-Time Messaging with Socket.IO
- 🖥 Screen Sharing Support
- ⚡ Low Latency Streaming using SDP protocol + UDP-based transmission
- 🏗 Decentralized Architecture – No central relay servers

---

## 🛠 Tech Stack

- **Frontend:** React.js (see `frontend/`)
- **Backend:** Node.js, Express.js (see `backend/`)
- **Database:** MongoDB Atlas
- **Real-time Communication:** WebRTC, Socket.IO
- **Authentication:** JWT
- **Deployment:** Render

---

## 🌍 Live Demo

🔗 [Try it Here](https://video-conferencing-system-ucn1.onrender.com/)

---

## 📸 Screenshots


Below are some screenshots from the application:

### 🏠 Home Page
![Home Page](screenshots/Screenshot%202025-08-16%20223536.png)

### 📝 Sign Up Page
![Sign Up Page](screenshots/Screenshot%202025-08-16%20223602.png)

### 🔑 Login Page
![Login Page](screenshots/Screenshot%202025-08-16%20223620.png)

### 👤 Join as Guest
![Join as Guest](screenshots/Screenshot%202025-08-16%20223650.png)

### 🎥 Meeting Page
![Meeting Page](screenshots/Screenshot%202025-08-16%20223947.png)

---

## ⚙️ Installation & Setup

1. **Clone the repo**

	```sh
	git clone https://github.com/your-username/video-conferencing-system.git
	cd video-conferencing-system
	```

2. **Install dependencies**

	```sh
	npm install
	```

3. **Set up environment variables (.env)**

	```env
	MONGO_URI=your_mongodb_atlas_url
	JWT_SECRET=your_secret_key
	```

4. **Run the backend**

	```sh
	npm run server
	```

5. **Run the frontend**

	```sh
	cd frontend
	npm start
	```

---

## 🔮 Future Enhancements

- 📱 Mobile app version with React Native
- 📊 Analytics dashboard for call quality
- 🌐 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.


