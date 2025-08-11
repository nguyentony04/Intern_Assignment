/*Tony Nguyen
this is the javascript practice file*/

//1. define array of products

const productsFruit = [
    {
        name: "Apple",
        price: 1.00,
        description: "Crispy & Sweet"
    },
    {
        name: "Orange",
        price: 1.50,
        description: "Tangy"
    },
    {
        name: "Banana",
        price: 1.00,
        description: "Yellow"
    }
]

const productsVeg = [
    {
        name: "Tomato",
        price: 1.00,
        description: "Sweet"
    },
    {
        name: "Carrot",
        price: 1.50,
        description: "N/A"
    },
    {
        name: "Basil",
        price: 1.00,
        description: "Fresh"
    }
]

const allProducts = [...productsFruit,...productsVeg]


//next is a function that will filter under a certain price

function FilterProductPrice(SetPrice){
   return allProducts.filter(({price}) => price <= SetPrice) //using destructuring here
}

//next is the .map() which will grab the name of the products

function FilterName(){
   return allProducts.map(({name}) => name)
}

//tmeplate literal practice
function tliteral({name, price, description}) {
    return `${name}: ${description}, costs $${price}`;
}


console.log(allProducts)
console.log(FilterProductPrice(1.50))
console.log(FilterName())
allProducts.map(product => {
    console.log(tliteral(product))
})


