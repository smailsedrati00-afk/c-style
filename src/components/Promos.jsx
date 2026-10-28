import { useState } from 'react'

// Had fonction kat7ett tabqa k7la foq tswira bach l'kitaba tban
function bg(image) {
  return {
    backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.15)), url(' + image + ')',
  }
}

export default function Promos({ showToast, applyFilter }) {
  const [storeOpen, setStoreOpen] = useState(false)
  const [city, setCity] = useState('')
  const [storeResult, setStoreResult] = useState('')

  function copyCode() {
    navigator.clipboard?.writeText('STUDENT10')
    showToast('Code STUDENT10 copied!')
  }

  function findStore(e) {
    e.preventDefault()
    if (city.trim().length < 2) {
      setStoreResult('Please enter a city name.')
      return
    }
    setStoreResult('Nearest C-Style store in ' + city.trim() + ': 12 Main Street, open 10:00 - 20:00.')
  }

  return (
    <section className="promos">
      <div className="promo" style={bg('/images/promo-students.jpg')}>
        <h3>STUDENTS GET<br /><b>10% OFF</b></h3>
        <p>Verify your student status and save more.</p>
        <button className="btn btn-light small" onClick={copyCode}>GET DISCOUNT</button>
      </div>

      <div className="promo" style={bg('/images/promo-season.jpg')}>
        <h3>NEW SEASON<br /><b>NEW LOOK</b></h3>
        <p>Discover the latest trends curated for you.</p>
        <button className="btn btn-light small" onClick={() => applyFilter('all')}>SHOP NOW</button>
      </div>

      <div className="promo" style={bg('/images/promo-store.jpg')}>
        <h3>VISIT US IN STORE</h3>
        <p>Find your nearest C-Style store.</p>
        <button className="btn btn-light small" onClick={() => setStoreOpen(true)}>FIND STORE</button>
      </div>

      {storeOpen && (
        <div className="modal-back" onClick={() => setStoreOpen(false)}>
          <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={findStore}>
            <h3>Find a store</h3>
            <input type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />
            {storeResult && <p className="form-msg">{storeResult}</p>}
            <div className="modal-actions">
              <button type="submit" className="btn btn-dark small">Search</button>
              <button type="button" className="btn btn-light small" onClick={() => setStoreOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      )}
    </section>
  )
}