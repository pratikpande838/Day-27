var details = [

    {img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
     name:"Fancy Product",
    price:"$40.00-$80.00",
    action:"Add to Cart",
    ids:"pro1"
},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Special Item",
price:`$20.00 $18.00`,
action:"Add to Cart",
ids:"pro2"
},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Sale Item",
price:"$50.00 $25.00",
action:"Add to Cart",
ids:"pro3"},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Popular Item",
price:"$40.00",
action:"Add to Cart",
ids:"pro4"},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Sale Item",
price:"$50.00 $25.00",
action:"Add to Cart",
ids:"pro5"},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Fancy Product",
price:"$120.00-$280.00",
action:"Add to Cart",
ids:"pro6"}, 
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Special Item",
price:"$20.00 $18.00",
action:"Add to Cart",
ids:"pro7"},
{img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
name:"Popular Item",
price:"$40.00",
action:"Add to Cart",
ids:"pro8"}
]


 price=(d)=>{
    console.log("clicked....")
    console.log(d.getAttribute(id))
    // var price = document.getElementsByClassName("price");
    // console.log(price.innerHTML)
    // let p1 = price.innerHTML;
    // p1.split(" ");
    // p1[0]
}

function shop(){
    var section= document.createElement("section");
    section.setAttribute("class","py-5")

    details.map(({img,name,price,action,ids})=>{
    
    const main_div= document.createElement("div");
    main_div.setAttribute("class","container px-4 px-lg-5 mt-5");
    
        main_div.innerHTML=`
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src=${img} alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${name}</h5>
                                <!-- Product price-->
                                <div >
                                ${price}
                                </div>
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a id=${ids} class="btn btn-outline-dark mt-auto" href="#" onclick="action(this)">${action}</a></div>
                       </div>
                    </div>
                    </div>
                    </div>
                `;
              
            section.append(main_div);  
        
    });

    document.body.appendChild(section);
}


action=(d)=>{
 //   var action= document.getElementById(ids)
    var id_name=d.getAttribute("id")
    var add= document.getElementById("cart_add");
    
    var action = document.getElementById(id_name)
    if(action.innerHTML=="Add to Cart"){
    add.innerHTML= +add.innerHTML + 1
    console.log(add.innerHTML)
    action.innerHTML="Remove from Cart";
    }else if(action.innerHTML =="Remove from Cart"){
 add.innerHTML= +add.innerHTML - 1
    console.log(add.innerHTML)
    action.innerHTML="Add to Cart"
    }
    
    
}
shop();