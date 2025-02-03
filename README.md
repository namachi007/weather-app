# Stellar Weather

Stellar Weather is a simple web app that lets you see the current weather for any city. Just type in a city name, and the app will show you the temperature, humidity, and a brief description of the weather along with an icon that represents the conditions. The design is clean, modern, and works well on both computers and mobile devices.

## What It Does

- **City Search:**  
  Type in the name of a city to see its current weather.

- **Live Weather Information:**  
  The app shows the temperature, humidity, and a quick weather summary (like "Clear" or "Cloudy").

- **Nice, Modern Design:**  
  The weather information is presented in a simple card-like layout with smooth transitions and attractive colors.

- **Works on All Devices:**  
  The layout adjusts nicely whether you’re using a phone, tablet, or computer.

- **Secure API Key Handling:**  
  I keep my API key safe by storing it in environment variables. During development, I use a local file that is not shared, and in production, the key is securely set up on Vercel.

## How I Built It

I created this app using basic HTML for the structure, CSS for the look and feel, and JavaScript to handle user interactions and fetch the weather data. To make the development process faster and smoother, I used a tool called Vite. This tool helps bundle the code and run it easily on my computer.

The weather data is gathered from the OpenWeatherMap service using Axios, which makes it easy to get data from the internet. I wrote the code in a way that is easy to read and understand using async/await. This helps the app wait for the weather data before updating what you see.

To protect sensitive information like the API key, I used a file called `.env` during development. I then set up the same key in Vercel’s settings when I deployed the app online. I also made sure to remove the `.env` file from my public code so that the key stays private.

