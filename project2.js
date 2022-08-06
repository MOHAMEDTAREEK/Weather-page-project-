
let weather = {
    apiKey: "8e99d799a8b6b8bbeccc2009949a7e8b",
  
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apiKey
      ).then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
  
    displayWeather: function (data) {
     const{ name } = data ;
     const {icon , description} = data.weather [0]; 
     const{temp , humidity } =data.main ;
     const {speed}= data.wind;
     console.log(name, icon, description, temp, humidity, speed);
     document.querySelector(".city").innerHTML="weather in" + name;
     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
     document.querySelector(".description").innerHTML= description;
     document.querySelector(".temp").innerHTML= temp + "°C";
     document.querySelector(".humidity").innerHTML= "humidity :" +humidity +" %";
     document.querySelector(".wind").innerHTML= "wind speed :" +speed + " km/h";
  
    },
    search: function(){
   this.fetchWeather(document.querySelector(".search-bar").value);
 }
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key=="Enter"){
        weather.search()
    }
})