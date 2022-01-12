const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

function dataAmericana(Obj){
    let arrayData = Obj.created.split("-");
    let str = arrayData[1]+"-"+arrayData[2]+"-"+arrayData[0];
    return str
}

function dataItaliana(Obj){
    let arrayData = Obj.created.split("-");
    let str = arrayData[2]+"-"+arrayData[1]+"-"+arrayData[0];
    return str
}

function creaPost(array){
    let container = document.getElementById("container");
    for (let i = 0; i < array.length; i++) {

        
        if(array[i].author.image == null){
            let nomeEcognome = array[i].author.name.split(" ");
            array[i].author.image = `${nomeEcognome[0].charAt(0)}${nomeEcognome[1].charAt(0)}`;
            container.innerHTML += 
        `
        <div class="post" id="post-${i+1}">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <div class="profile-pic-default">
                            <span>${ array[i].author.image }</span>
                        </div>                     
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${array[i].author.name}</div>
                        <div class="post-meta__time">${dataItaliana(array[i])}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${array[i].content}</div>
            <div class="post__image">
                <img src=${array[i].media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${i}" class="js-likes-counter">${array[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>


        `; 


        } else {

            container.innerHTML += 
            `
            <div class="post" id="post-${i+1}">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src=${array[i].author.image} alt="${array[i].author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${array[i].author.name}</div>
                            <div class="post-meta__time">${dataItaliana(array[i])}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${array[i].content}</div>
                <div class="post__image">
                    <img src=${array[i].media} alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${i}" class="js-likes-counter">${array[i].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
    
    
            `; 
    
    
        }

        
    }


};


creaPost(posts);


let likeButtons = document.querySelectorAll(".js-like-button");
let likeButtons_liked = document.querySelectorAll(".like-button--liked");

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click",function(e){
        e.preventDefault();

        
        if (this.classList.contains("like-button--liked")) {
            this.classList.remove("like-button--liked");

            document.getElementById("like-counter-"+i).innerHTML = posts[i].likes;

        } else{
            
            this.classList.add("like-button--liked");

            document.getElementById("like-counter-"+i).innerHTML = posts[i].likes+1;
        }
    });
}



