import './styles/styles.css'
import ProductCard from './components/ProductCard'

function App() {
  const products = [
    {
      key: 0,
      image: 'https://images.selfedge.com/cache/catalog/20220628/Strike_Gold_Blank_Loopwheeled_T-Shirt_White-1-680x1025.jpg',
      name: 'Shirt',
      price: 25.0,
      description: 'S/M/L/XL', 
      inStock: false
    },

    {
      key: 1,
      image: 'https://media-catalog.giglio.com/images/f_auto/t_prodZoom/v1/products/F79778.002_1/diesel.jpg',
      name: 'Belt',
      price: 15.0,
      description: '28-30in/30-32in/32-34in', 
      inStock: true
    },
    {
      key: 2,
      image: 'https://sacred-archive.com/cdn/shop/files/SILO-SHORT-FLATLAY-2_e1529aa1-ce66-4907-83a9-4c32cb57afc8.png?v=1733988787&width=2000',
      name: 'Shorts',
      price: 35.0,
      description: '28-30in/30-32in/32-34in', 
      inStock: true
    },
    {
      key: 3,
      image: 'https://www.pearledivory.com/cdn/shop/files/NOM7.jpg?v=1737745481&width=493',
      name: 'Baggy Jeans',
      price: 55.0,
      description: '28x30in/30x32in/32x34in', 
      inStock: false
    }
  ]

  return (
    <div className = "productList">
      {products.map(product =>(
        <ProductCard
          key={product.key}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          inStock={product.inStock}
          />
      )
    )
  }
    </div>
  )
}

export default App
