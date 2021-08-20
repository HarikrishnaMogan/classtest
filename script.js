fetch("https://611f26469771bf001785c730.mockapi.io/users")
.then(data=>data.json())
.then(users=> displaydata(users));

function displaydata(users)
{
    console.log(users);
    console.log("called users")
    let con = document.querySelector("#container");
  users.forEach(users=>
    {
        con.innerHTML +=`
        <div class="sub-con">
    <img class="image" src="${users.avatar}">
    <div class="details">
    <p class="name">${users.name}</p>
    <p class="id">${users.createdAt}</p>
    </div>
    </div>
    `; 
    })
   
}