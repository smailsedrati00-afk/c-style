export default function Hero({ goTo, applyFilter }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>WEAR YOUR <br /><strong>CONFIDENCE</strong></h1>
        <p>Trendy pieces. Timeless style. C-Style has everything you need to look and feel your best.</p>
        <div className="hero-buttons">
          <button className="btn btn-dark" onClick={() => applyFilter('all')}>SHOP NEW IN</button>
          <button className="btn btn-light" onClick={() => goTo('collections')}>EXPLORE COLLECTIONS</button>
        </div>
      </div>

      <div className="hero-visual">
        <img className="hero-img" src="/images/heroo.jpg" alt="C-Style models" />
        {/* <div className="hero-card"><span className="logo-circle big">C</span>C-STYLE</div> */}
      </div>
    </section>
  )
}