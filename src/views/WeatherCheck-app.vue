<script >
export default {
  name: 'App',
  data() {
    return {
      api_key: 'e8d61496ac0d1816f163083369dcef6c',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},

    }
  },
  methods: {
    fetchWeather(event) {
      if (event.key === 'Enter') {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return d.toLocaleDateString(undefined, options);
    }

  }
}
</script>

<template>

 
<main id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="query"
        @keypress="fetchWeather"
      />
    </div>

    <div class="weather-wrap" v-if="typeof weather.main !== 'undefined'">
      <div class="location-box">
        <div class="location">{{ weather.name }}, {{ weather.sys?.country }}</div>
        <div class="date">{{ dateBuilder() }}</div>
      </div>
      
      <div class="weather-box">
        <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </main>

</template>

<style scoped>

#app {
  background-image: url("@/assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url("@/assets/warm-bg.webp");
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.search-box .search-bar {
  width: 70%;
  display: block;
  padding: 15px;

  border: none;
  outline: none;
  background: none;
  appearance: none;

  font-size: 20px;
  color: #292929;

  background-color: rgba(255, 255, 255, 0.63);
  border-radius: 0px 16px 0px 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.location-box .date {
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  font-style: italic;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  font-size: 60px;
  color: #fff;
  padding: 10px 25px;
  display: inline-block;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  margin: 20px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  font-size: 48px;
  color: #fff;
  font-style: italic;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
