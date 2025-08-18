import './styles/styles.css'
import ProductCard from './components/ProductCard'
import { useState, useEffect } from 'react'

function App() {
  const [sortOption, setSortOption] = useState('')
  const [filterOption, setFilterOption] = useState('')
  const [theme, setTheme] = useState('light') // theme toggle state

  const products = [
    { key: 0, image: 'https://images.selfedge.com/cache/catalog/20220628/Strike_Gold_Blank_Loopwheeled_T-Shirt_White-1-680x1025.jpg', name: 'Shirt', price: 25.0, description: 'S/M/L/XL', inStock: false },
    { key: 1, image: 'https://media-catalog.giglio.com/images/f_auto/t_prodZoom/v1/products/F79778.002_1/diesel.jpg', name: 'Belt', price: 15.0, description: '28-30in/30-32in/32-34in', inStock: true },
    { key: 2, image: 'https://sacred-archive.com/cdn/shop/files/SILO-SHORT-FLATLAY-2_e1529aa1-ce66-4907-83a9-4c32cb57afc8.png?v=1733988787&width=2000', name: 'Shorts', price: 35.0, description: '28-30in/30-32in/32-34in', inStock: true },
    { key: 3, image: 'https://www.pearledivory.com/cdn/shop/files/NOM7.jpg?v=1737745481&width=493', name: 'Baggy Jeans', price: 55.0, description: '28x30in/30x32in/32x34in', inStock: false }
  ]

  // this is the filter
  let filteredProducts = [...products]
  if (filterOption === 'inStock') {
    filteredProducts = filteredProducts.filter(p => p.inStock)
  } else if (filterOption === 'outOfStock') {
    filteredProducts = filteredProducts.filter(p => !p.inStock)
  }

  // this is sorting
  if (sortOption === 'az') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortOption === 'za') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sortOption === 'lowHigh') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortOption === 'highLow') {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  // this is theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // keep body class synced with theme
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      {/* header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>The Basics</h1>
        
        {/* controls */}
        <div style={{ display: 'flex', gap: '14px' }}>
          <div>
            <label htmlFor="filter">Filter: </label>
            <select id="filter" value={filterOption} onChange={e => setFilterOption(e.target.value)}>
              <option value="">All</option>
              <option value="inStock">Availability: In Stock</option>
              <option value="outOfStock">Availability: Out of Stock</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" value={sortOption} onChange={e => setSortOption(e.target.value)}>
              <option value="">Featured</option>
              <option value="az">Alphabetically: A-Z</option>
              <option value="za">Alphabetically: Z-A</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="highLow">Price: High to Low</option>
            </select>
          </div>

          {/* theme toggle button */}
          <button onClick={toggleTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </header>

      {/* product List */}
      <div className="productList">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.key}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  )
}

export default App
