# 🌍 GlobalView

GlobalView is a **full-stack web application** that displays country data (population, currency, region, etc.) using a React (Vite) frontend and fetches **live weather data** dynamically via a Node.js backend API.

---

## 🚀 Features
- 📌 **Country Cards** → Shows population, currency, and region of each country.  
- 🔍 **Search Functionality** → Quickly search for any country.  
- 🌦 **Live Weather** → On clicking a country card, weather data is fetched from the backend.  
- ⚡ **Dynamic API** → Backend (Node.js) securely handles weather API calls.  
- 📱 **Responsive Design** → Works across devices.  

---

## 🛠 Tech Stack
- **Frontend** → React (Vite), CSS/Bootstrap  
- **Backend** → Node.js, Express.js  
- **APIs** →  
  - [REST Countries API](https://restcountries.com/) – Country data  
  - [OpenWeatherMap API](https://openweathermap.org/api) – Weather data  

---

## 📂 Project Structure
GlobalView/ # React frontend (Vite)
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── App.jsx # Main app
│ │ └── ...
│ └── vite.config.js
│
backend/ # Node.js backend
│ ├── index.js # Express server entry point
│ ├── routes/ # Weather API routes
│ └── ...
│
assets/ # Static assets (logos, icons, etc.)
images/ # Image resources
README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/GlobalView.git
cd GlobalView
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
npm start
Runs at → http://localhost:5000

3. Setup Frontend (Vite)
bash
Copy
Edit
cd GlobalView
npm install
npm run dev
Runs at → http://localhost:5173

🔑 Environment Variables
Create a .env file inside backend/ with:

ini
Copy
Edit
WEATHER_API_KEY=your_openweathermap_api_key
PORT=5000
📸 Screenshots
🌍 Country cards → population, currency, region.

🌦 Weather data → displayed on card click.

🚀 Future Enhancements
Add population/temperature graphs.

Save favorite countries.

Dark mode theme.

🤝 Contributing
Contributions are welcome! Fork this repo and submit a PR.

📜 License
This project is licensed under the MIT License.
