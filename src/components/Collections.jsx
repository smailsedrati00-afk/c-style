import { useRef } from 'react'
import { collections } from '../data/products'

export default function Collections({ applyFilter }) {
  const rowRef = useRef(null)

  function scrollRow(direction) {
    rowRef.current?.scrollBy({ left: direction * 260, behavior: 'smooth' })
  }

  return (
    <section className="section" id="collections">
      <div className="section-head">
        <h2>CURATED COLLECTIONS</h2>
        <div className="arrows">
          <button aria-label="Scroll collections left" onClick={() => scrollRow(-1)}>←</button>
          <button aria-label="Scroll collections right" onClick={() => scrollRow(1)}>→</button>
        </div>
      </div>
      <div className="collection-row" ref={rowRef}>
        {collections.map((collection) => (
          <button
            key={collection.title}
            className="collection"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05)), url(' + collection.image + ')',
            }}
            onClick={() => applyFilter(collection.filter)}
            aria-label={`Shop ${collection.title}`}
          >
            <h3>{collection.title}</h3>
            <p>{collection.text}</p>
            <span className="shop-link">SHOP NOW →</span>
          </button>
        ))}
      </div>
    </section>
  )
}