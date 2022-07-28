
// Id generator
const idGenerator=()=>{

    const random= Math.floor(Math.random()*100) ;
     return random
 };


// array productos
const newArrivalsItems=[{
    id: idGenerator(),
    img:"./assets/productCard/grey.png ",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408"

},
{
    id: idGenerator(),
    img:"./assets/productCard/blue.png ",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408"

},
{
    id: idGenerator(),
    img:"./assets/productCard/green.png ",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408"

},
{
    id: idGenerator(),
    img:"./assets/productCard/pink.png ",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408"

}]



// render new arrivals cards
const newArrivals= document.querySelector("#cont-newArrivals");

renderProducts(newArrivalsItems);

    function renderProducts (arr){

            for (product of arr){

            newArrivals.innerHTML+= `
            <div class="col-md-3 ">
                <div class="card mb-4" >
                <img src="${product.img}" class="card-img-top mt-4" alt="first-product">
                    <div class="card-body">
                        <h3 class="card-title">${product.tittle}</h3>
                        <h5 class="card-text">${product.desc}</h5>
                        <h3 class="card-title">${product.price}</h3> 
                    </div>
                </div>
            </div>
        `
        }
};


// array special post

const specialPostsItems=[
    {
    id:idGenerator(),
    img:"./assets/specialPost/Sp1.png",
    tittle:"Jordan one",
    subtittle:"Red-white" ,
    para: " Eget cras orci quam fermentum egestas donec lacus lorem  Sem tristique viverra eu sed. Massa lacus, in varius pharetra massa sit egetfelis. In eget arcu, diam eu imperdiet congue nisl, ornare donec." ,
},{
    id:idGenerator(),
    img:"./assets/specialPost/Sp2.png",
    tittle:"Jordan one",
    subtittle:"Blue-white" ,
    para: " Eget cras orci quam fermentum egestas donec lacus lorem  Sem tristique viverra eu sed. Massa lacus, in varius pharetra massa sit egetfelis. In eget arcu, diam eu imperdiet congue nisl, ornare donec." ,
}]

// render speial post
const specialPost = document.querySelector('#cont-specialPost');
renderSpecialPost(specialPostsItems);
function renderSpecialPost(arr){


    for (post of arr){

        specialPost.innerHTML+= ` 
                    <div class=" col-md mr-md-3 mx-2 cont-img1 mb-5"  >
                        <div class="card" >
                        <img src="${post.img}" class="img1 card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" style="color: #5463FF; font-size:18px; margin-left: 0px;" >${post.tittle}</h5>
                            <h6 class="card-subtitle mb-2 " style="text-decoration: underline;  font-size: 20px;">${post.subtittle}</h6>
                            <p class="card-text text-muted">${post.para}</p>
                            
                            <a href="./shop.html" class="card-link " style="color: #5463FF; ">Shop now! </a>
                        </div>
                        </div>
                    </div>
                    `
                  
        }
};


