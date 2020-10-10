let cities=[
  {
    name:"Barcelona",
     latitude:41.41,
     longitude:2.19,
    },
  {
     name:"Tokyo",
    latitude:35.6,
    longitude:139.8,
    },
  {
    name:"Geneva",
    latitude:46.2,
    longitude:6.1,}
]
function callApi(item){
    for(item of cities){
    fetch("https://api.weatherbit.io/v2.0/current?city=" +item.name + "&key=e9cdfbafa5934221977882f73d573f35")
    .then((response)=>{
        if(response.status>=200 && response.status<=299){
            return response.json();}
    })
.then((myJson)=>{
   let getResults= myJson.data;
   let city=getResults[0].city_name;
   let temprature=getResults[0].temp;
   let weather= getResults[0].weather;
   let imageLink ="https://www.weatherbit.io/static/img/icons/"+weather.icon+".png";
   
   let getArticle=document.querySelector("#main-container");
   let getCity=document.createElement("div");
   getCity.className="article"
   getArticle.appendChild(getCity);
   let setCity=document.createElement("h3");
   getCity.appendChild(setCity);
   setCity.innerHTML=city;
   let setImage=document.createElement("img");
   setImage.setAttribute("src", imageLink)
   getCity.appendChild(setImage);
   
   let getTemprature=document.createElement("p");
   getTemprature.innerHTML=temprature + "ºC";
   getCity.appendChild(getTemprature);
   getTemprature.className="tempr";

   let getWeather=document.createElement("p");
   getWeather.innerHTML=weather.description;
   getCity.appendChild(getWeather);


})
.catch(function(error){
    alert("Run!");
    console.log(error);
});
}}
callApi();
