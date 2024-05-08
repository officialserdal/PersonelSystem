const divModel = document.querySelector("#employeeDetails");
const btn = document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");


btn.addEventListener("click", function() {
   
    let apiUrl = 'https://jsonplaceholder.typicode.com/users/4'; // Patricia'nın ID'si 2

    
    fetch(apiUrl)
      .then(response => response.json())
      .then(patricia => {
      
        divModel.innerHTML = `
            <p>ID: ${patricia.id}</p>
            <p>City: ${patricia.address.city}</p>
            <p>E-mail: ${patricia.email}</p>
            <p>Website: ${patricia.website}</p>
            <p>UserName: ${patricia.username}</p>

            <hr>
        `;
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
      });
});

btn2.addEventListener("click" ,function(){

apiUrl='https://jsonplaceholder.typicode.com/users/2';
fetch(apiUrl)
.then(response=>response.json())
.then(data=>{

    divModel.innerHTML=`
    <p>ID: ${data.id}</p>
    <p>City: ${data.address.city}</p>
    <p>E-mail: ${data.email}</p>
    <p>WebSite: ${data.website}</p>
    <p>UserName: ${data.username}</p>
    <hr>
    `


})
.catch(error=>{
    console.log("bir hata oluştu",error)
})

})

btn3.addEventListener("click",function(){
  apiUrl='https://jsonplaceholder.typicode.com/users/3';

fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
  divModel.innerHTML=`
  <p>ID: ${data.id}</p>
  <p>City: ${data.address.city}</p>
  <p>E-mail: ${data.email}</p>
  <p>WebSite: ${data.website}</p>
  <p>UserName: ${data.username}</p>
  `
})

})
btn4.addEventListener("click",function(){
  apiUrl='https://jsonplaceholder.typicode.com/users/5';
  fetch(apiUrl)
  .then(response=>response.json())
  .then(data=>{

    divModel.innerHTML=`
    <p>ID: ${data.id}</p>
    <p>City: ${data.address.city}</p>
    <p>E-mail: ${data.email}</p>
    <p>WebSite: ${data.website}</p>
    <p>UserName: ${data.username}</p
    
    
    
    `
  })




})

