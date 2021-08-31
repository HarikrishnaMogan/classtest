let con = document.querySelector("#container");
let maincon = document.querySelector(".maincontainer");

function refresh()
{
  con.innerHTML="";
    fetch("https://611f26469771bf001785c730.mockapi.io/users",{method:"GET"})
    .then(data=>data.json())
    .then(users=> displaydata(users));
   
}
refresh();

function displaydata(users)
{
  users.forEach(users=>
    {
        con.innerHTML +=`
        <div class="sub-con">
    <img class="image" src="${users.avatar}">
    <div class="details">
    <p class="name">${users.name}</p>
    <p class="id">${users.createdAt}</p>
    <button class="delete" onclick="deleteid(${users.id})">Delete</button>
    <button class="delete" onclick="edit(${users.id})">Edit</button>
    <div class="edit edit${users.id}">
    <input class="editname${users.id}" type="text" placeholder="name">
    <button class="delete" onclick="editsubmit(${users.id})">Ok</button>
    </div>
    </div>
    </div>
    `; 
    })
    maincon.style.opacity="1";
}

function deleteid(id)
{
  maincon.style.opacity="0";
  fetch(`https://611f26469771bf001785c730.mockapi.io/users/${id}`,{method:"DELETE"})
  .then(data=> data.json())
  setTimeout(()=>{ refresh();},800)
}
function addprofile()
{
  maincon.style.opacity="0";
   let name1 = document.querySelector("#name");
  let ava = document.querySelector("#avatar");
  
  fetch("https://611f26469771bf001785c730.mockapi.io/users",{
    method:"POST",
      
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name1.value,
      avatar:ava.value,
      createdAt:new Date().toISOString()
    })

  }).then(data=>data.json());
  setTimeout(()=>{ refresh();},800)
}
 function edit(id)
{
  let edit = document.querySelector(`.edit${id}`);
  edit.style.display="block";
} 
function editsubmit(id)
{
  let name = document.querySelector(`.editname${id}`);
  fetch(`https://611f26469771bf001785c730.mockapi.io/users/${id}`,
  {
    method:"PUT",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      name:name.value,
    })

  })
  .then(data=>data.json());
  setTimeout(()=>{ refresh();},800)
  let edit = document.querySelector(".edit");
  edit.style.display="none";
  
}