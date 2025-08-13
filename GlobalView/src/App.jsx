import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Weather } from "./pages/Weather"
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "weather-report/:city",
        element:<Weather/>,
      },
    ],
  },
],
  // {
  //   basename: "/GlobalView" // 👈 Add this line
  // }
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;

// 


// import React, { useState } from 'react';
// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     setError('');
//     setWeather(null);
//     try {
//       const res = await fetch(`http://localhost:5000/api/weather/${city}`);
//       if (!res.ok) {
//         const data = await res.json();
//         setError(data.error || 'Error fetching weather');
//         return;
//       }
//       const data = await res.json();
//       setWeather(data);
//     } catch (err) {
//       setError('Network error');
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Weather App</h2>
//       <input
//         type="text"
//         value={city}
//         onChange={e => setCity(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={fetchWeather}>Get Weather</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weather && (
//         <div>
//           <h3>{weather.name}</h3>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
