import './styles/styles.css'
import ProductCard from './components/ProductCard'
import { useState, useEffect, useMemo } from 'react'

function App() {
  const [sortOption, setSortOption] = useState('')
  const [filterOption, setFilterOption] = useState('')
  const [theme, setTheme] = useState('light')

  // new state for fetched products
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // new cart state
  const [cart, setCart] = useState([])

  // fetch products from JSON file in src/data
  useEffect(() => {
    const url = new URL('./data/products.json', import.meta.url)
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load products ${res.status}`)
        return res.json()
      })
      .then(data => {
        setProducts(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Failed to load products')
        setLoading(false)
      })
  }, [])

  // cart helpers
  const cartCount = useMemo(
    () => cart.reduce((sum, it) => sum + it.qty, 0),
    [cart]
  )

  const addToCart = product => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return prev.map(p => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  // theme toggle
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // filtering
  let view = [...products]
  if (filterOption === 'inStock') view = view.filter(p => p.inStock)
  if (filterOption === 'outOfStock') view = view.filter(p => !p.inStock)

  // sorting
  if (sortOption === 'az') view.sort((a, b) => a.name.localeCompare(b.name))
  if (sortOption === 'za') view.sort((a, b) => b.name.localeCompare(a.name))
  if (sortOption === 'lowHigh') view.sort((a, b) => a.price - b.price)
  if (sortOption === 'highLow') view.sort((a, b) => b.price - a.price)

  return (
    <div className={`app ${theme}`}>
      {/* header */}
      <header className="siteHeader">
        <div className="brand">The Basics</div>

        {/* controls */}
        <div className="controlsRow">
          <div className="filterGroup">
            <label className="label" htmlFor="filter">Filter</label>
            <select
              id="filter"
              className="select"
              value={filterOption}
              onChange={e => setFilterOption(e.target.value)}
            >
              <option value="">All</option>
              <option value="inStock">Availability: In Stock</option>
              <option value="outOfStock">Availability: Out of Stock</option>
            </select>
          </div>

          <div className="filterGroup">
            <label className="label" htmlFor="sort">Sort by</label>
            <select
              id="sort"
              className="select"
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
            >
              <option value="">Featured</option>
              <option value="az">Alphabetically: A to Z</option>
              <option value="za">Alphabetically: Z to A</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="highLow">Price: High to Low</option>
            </select>
          </div>

          <button className="select" onClick={toggleTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>

          {/* new cart pill shows running count */}
          <div className="cartPill" aria-label="Cart item count">
            Cart
            <span className="cartCount">{cartCount}</span>
          </div>
        </div>
      </header>

      {/* body */}
      {loading && <p>Loading products…</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      {!loading && !error && (
        <div className="productList">
          {view.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              inStock={product.inStock}
              onAdd={() => addToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App