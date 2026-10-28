import { categories } from '../data/products'

export default function Categories({ applyFilter }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>SHOP BY CATEGORY</h2>
        <button className="link-btn" onClick={() => applyFilter('all')}>View all →</button>
      </div>
      <div className="category-row">
        {categories.map((cat) => (
          <button key={cat.label} className="category" onClick={() => applyFilter(cat.filter)}>
            <span className="category-circle" style={{ background: cat.color }}>
              {cat.image ? (
                <img src={cat.image} alt={cat.label} />
              ) : (
                <span className="sale-text">SALE</span>
              )}
            </span>
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  )
}