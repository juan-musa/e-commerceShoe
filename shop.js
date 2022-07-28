
// id generator
const idGenerator=()=>{

    const random= Math.floor(Math.random()*100) ;
     return random
 };
// array products
const products=[{
    id:idGenerator(),
    img:"./assets/productCard/grey.png",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/blue.png",
    tittle:"Jordan one",
    desc:"BLUE-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/green.png",
    tittle:"Jordan one",
    desc:"GREEN-BLACK",
    price:"$408",
},{
    id:idGenerator(),
    img:"./assets/productCard/pink.png",
    tittle:"Jordan one",
    desc:"PINK-BLACK",
    price:"$408",
},
{
    id:idGenerator(),
    img:"./assets/productCard/grey.png",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/blue.png",
    tittle:"Jordan one",
    desc:"BLUE-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/green.png",
    tittle:"Jordan one",
    desc:"GREEN-BLACK",
    price:"$408",
},{
    id:idGenerator(),
    img:"./assets/productCard/pink.png",
    tittle:"Jordan one",
    desc:"PINK-BLACK",
    price:"$408",
},
{
    id:idGenerator(),
    img:"./assets/productCard/grey.png",
    tittle:"Jordan one",
    desc:"GREY-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/blue.png",
    tittle:"Jordan one",
    desc:"BLUE-BLACK",
    price:"$408",

},{
    id:idGenerator(),
    img:"./assets/productCard/green.png",
    tittle:"Jordan one",
    desc:"GREEN-BLACK",
    price:"$408",
},{
    id:idGenerator(),
    img:"./assets/productCard/pink.png",
    tittle:"Jordan one",
    desc:"PINK-BLACK",
    price:"$408",
}];

console.log(products)
// render products

const productsItems=document.querySelector('#prod-Cont');

renderProducts(products);

function renderProducts(arr){

    for (items of arr){

        productsItems.innerHTML+= ` 
                    <div class="col-md-4 col-lg-3">
                        
                    <div class="card mb-4" >
                    <img src="${items.img}" class="card-img-top mt-4" alt="first-product">
                    <div class="card-body">
                        <h3 class="card-title">${items.tittle}</h3>
                        <h5 class="card-text">${items.desc}</h5>
                        <h3 class="card-title">${items.price}</h3>
                        <div class="d-grid gap-2 col">
                        <a href="./single-product.html"><button class="btn btn-outline-primary  w-100 mb-1" type="button">  Buy now </button> </a>
                        <a href="./cart.html"><button class="btn btn-outline-success w-100" type="button" > Add to cart</button></a>
                        </div>
                    </div>
                    </div>
                </div>
                    `
                  
        }
};