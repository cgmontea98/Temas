"use strict";

/* CAMINO 1
const res = fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    //console.log(data);
    return data.json();
  }).then(d => {
    console.log(d);
  })
  .catch(() => {
    console.log("ups, salio mal");
  });
 */

/*  CAMINO 2
async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res)
  if (res.ok) {
    res = await res.json();
    console.log(res);
  } else {
    console.log("ups, salio mal");  
  }
}
getUsers() */

/* CAMINO 3
async function getUsers() {
  try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();
    console.log(res);
  }catch (error) {
    console.log('error', error)
  }
}
getUsers() */

const $userslist = document.getElementById('userslist')
console.log(userslist)

async function getUsers() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
     let html = '';
     for (const  i  of users){
      html += `<li>${i.name}</li>`
     }
     $userslist.innerHTML = html;
  }catch (error) {
    console.log('error', error)
  }
}
getUsers()
