const newArrivals= document.querySelector("#cont-newArrivals");

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



