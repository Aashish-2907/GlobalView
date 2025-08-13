# React + Vite
# 🌍 Country Cards with Live Weather

This project shows country details (flag, population, region, etc.) and now also **live weather updates**.  
The base country card frontend was inspired by [Thapa Technical](https://www.youtube.com/@ThapaTechnical), and I extended it with a **backend** plus **OpenWeather API integration** to fetch real-time weather data.

---

## ✨ Features

- **Country Cards** – Displays country name, flag, population, region, and capital.
- **Live Weather** – Shows temperature, weather condition, and icon from OpenWeather.
- **Backend Integration** – Fetches weather from the API and sends it to the frontend.
- **Responsive UI** – Works on mobile, tablet, and desktop.

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios for API calls
- CSS / Tailwind (depending on your setup)

**Backend:**
- Node.js + Express / FastAPI
- Axios / Requests for external API calls
- CORS enabled

**APIs:**
- [REST Countries API](https://restcountries.com/)
- [OpenWeather API](https://openweathermap.org/api)

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/country-weather.git
cd country-weather

2️⃣ Install dependencies
Frontend:

bash
Copy
Edit
cd client
npm install
Backend:

bash
Copy
Edit
cd backend
npm install     # Node.js backend
# OR
pip install -r requirements.txt  # FastAPI backend
🔑 Environment Variables
Create a .env file inside the backend folder:

env
Copy
Edit
OPENWEATHER_API_KEY=your_api_key_here
🚀 Run the project
Backend:

bash
Copy
Edit
# Node.js
cd backend
npm start

# FastAPI
uvicorn main:app --reload --port 8000
Frontend:

bash
Copy
Edit
cd client
npm start
Frontend → http://localhost:3000
Backend → http://localhost:5000 or http://localhost:8000

🙌 Credits
Base frontend idea – Thapa Technical

Weather integration & backend – Added by me

📜 License
MIT License — You can use and modify this project, just credit the original creator and mention improvements you’ve made.
