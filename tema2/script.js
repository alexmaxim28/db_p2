let users;
let posts;
let zero= 123;

async function fetchUsers(){
    users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    return users;
}

async function fetchPosts(){
    posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await posts.json();
    console.log("Am apelat o functie din JS file")
    return posts;
}
async function showUsers(users){
    for(var i = 0; i < 10;i++){
        console.log(users[i].id);
    }
}
users =  fetchUsers().then(response =>{
    console.log("Am primit ", response);
    showUsers(response);
    populateUsers();
    
})
function populateUsers(){
    text = "";
    for(var i = 0; i<users.length;i++){
        const para = document.createElement("p");
        const node = document.createTextNode(JSON.stringify(users[i].name));
        para.appendChild(node);
        const element = document.getElementById("demo");
        element.appendChild(para);
    }
}
async function getArticle(){
    let image = await fetch("https://picsum.photos/1280/720").then(response =>{
        let img = document.createElement("img");
        img.src = response.url;
        let parent = document.getElementById("main");
        parent.appendChild(img);
        let title = document.createElement("h2");
        title.className = "title";
        title.innerHTML = "Title";
        parent.appendChild(title);
        let ul = document.createElement("ul");
        ul.className = "info__container";
        let li1 = document.createElement("li");
        li1.className = "info__item";
        ul.appendChild(li1);
        li1.innerHTML = "Destination Europe";

        let li2 = document.createElement("li");
        ul.appendChild(li2);
        li2.className = "info__item";
        li2.innerHTML = "Added by ";

        let nameAuthor = document.createElement("span");
        li2.appendChild(nameAuthor);
        nameAuthor.className = "info__mark";
        nameAuthor.innerHTML = "Jonnathan Mercadina";
        
        let li3 = document.createElement("li");
        ul.appendChild(li3);
        li3.className = "info__item";
        li3.innerHTML = "July 01, 2018";
        
        parent.appendChild(ul);

        let div = document.createElement("div");
        parent.appendChild(div);
        div.className = "actions__container";

        let button1 = document.createElement("button");
        let button2 = document.createElement("button");

        div.appendChild(button1);
        div.appendChild(button2);

        button1.innerHTML = "Edit";
        button2.innerHTML = "Delete";

    });
    return image;
}

posts = fetchPosts();
getArticle().then(response => {console.log(response)});
console.log(users);
console.log(posts);