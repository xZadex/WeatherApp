<h1 align="center">:sunny:Weather App:sunny:</h1>

<h2>Description:</h2>
<p>The Weather App is a user-friendly and intuitive weather application that prompts the user to input their zip code and promptly displays the corresponding location name, current temperature, a concise and informative description of the weather, along with the high and low temperatures expected for the day. Additionally, this efficient app also provides the user with the sunrise and sunset times, adding an extra layer of useful information for planning your day accordingly.</p>

<h2>Technologies:</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>

<h2>APIs:</h2>
<ul>
  <li><a href="https://openweathermap.org/api">OpenWeather API</a></li>
</ul>

<h2>How It Works:</h2>
<p>Upon the user inputting a zip code and triggering a search, the Weather App promptly executes an efficient Axios GET request to the <a href="https://openweathermap.org/api">OpenWeather Geolocating API</a>, utilizing its dynamic features to gather location-specific information. As a response, the <a href="https://openweathermap.org/api">OpenWeather Geolocating API</a> quickly furnishes the app with precise longitude and latitude data for the entered zip code, which is subsequently used to execute another Axios GET request to the <a href="https://openweathermap.org/api">OpenWeather API</a>. The OpenWeather API in turn, furnishes the app with an incredibly comprehensive and insightful range of corresponding weather data for the given location. With all the necessary data now in hand, the app meticulously updates the states with the latest information, resulting in the correct and up-to-date weather data being displayed accurately on the app's intuitive user interface.</p>

<h2>Deployment:</h2>
This React App is deployed using Github Pages and can be viewed at:<br>
https://xzadex.github.io/WeatherApp/

<h2>Images:</h2>
<p align="center"><img src="https://images2.imgbox.com/c5/6b/T9ci8Bui_o.png" alt="image host"/></p>


