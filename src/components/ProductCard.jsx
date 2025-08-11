function ProductCard({ image, name, price, description, inStock }) {
  return (
    <div className="productCard">
      <div className="productMedia">
        <img className="productImage" src={image} alt={name} loading="lazy" />
      </div>

      <div className="productBody">
        <h2 className="productName">{name}</h2>
        <p className="productDesc">{description}</p>
        <p className="priceLine">{`$${price}`}</p>
        <span className={`stockBadge ${inStock ? 'inStock' : 'outOfStock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
