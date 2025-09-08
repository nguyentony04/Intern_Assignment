function ProductCard({ image, name, price, description, inStock, onAdd }) {
  return (
    <div className="productCard">
      <div className="productMedia">
        <img className="productImage" src={image} alt={name} loading="lazy" />
        <span className={`stockBadge ${inStock ? 'inStock' : 'outOfStock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      <div className="productBody">
        <h2 className="productName">{name}</h2>
        <p className="productDesc">{description}</p>
        <p className="priceLine">{`$${price}`}</p>

        <div className="actionsRow">
          <button
            className="addBtn"
            disabled={!inStock}
            onClick={onAdd}
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard