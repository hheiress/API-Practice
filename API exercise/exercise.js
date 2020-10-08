let button = document.querySelector("#principal-btn");
button.addEventListener("click", callApi); 

function callApi(){
    fetch("https://www.randomuser.me/api")
    .then ((response)=>{
       if(response.status >= 200 && response.status <= 299){
        return response.json();}
        else {
            throw new Error(
              `Encountered something unexpected: ${response.status} ${response.statusText}`);
          }
})
    .then (myJson => {
        let getResults = myJson.results;
        let name = getResults[0].name;
        let location = getResults[0].location;
        let getAge = getResults[0].dob;
        let introducing = "Hey! My name is " + name.first + ". I'm from " + location.city;
        let foto = getResults[0].picture.large;
        let emailText =getResults[0].email;

        let mainImage = document.querySelector("img");
        mainImage.setAttribute("src", foto);
       

        let ageNum = document.querySelector(".ageField");
        ageNum.innerHTML = getAge.age + " y.o ";
        
        let blockCard = document.querySelector(".text-block");
        blockCard.innerHTML=introducing; 

        let getEmail=document.querySelector(".email");
        getEmail.innerHTML=emailText;
    })
    .catch(function(error){
     alert("Run! ");
    console.log(error);
    });
}
