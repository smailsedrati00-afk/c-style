import { X, Trash2 } from 'lucide-react'

export default function CartDrawer({ open, close, cart, remove, clear, showToast }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  function checkout() {
    if (cart.length === 0) return
    clear()
    close()
    showToast('Thank you! Your order was placed (demo).')
  }

  return (
    <>
      {open && <div className="modal-back" onClick={close} />}
      <aside className={open ? 'drawer open' : 'drawer'}>
        <div className="drawer-head">
          <h3>Your cart ({cart.length})</h3>
          <button className="icon-btn" aria-label="Close cart" onClick={close}><X size={20} /></button>
        </div>
        <div className="drawer-body">
          {cart.length === 0 && <p className="empty">Your cart is empty.</p>}
          {cart.map((item) => (
            <div key={item.cartId} className="cart-item">
              <span className="dot" style={{ background: item.color }} />
              <span className="cart-name">{item.name}</span>
              <b>${item.price.toFixed(2)}</b>
              <button className="icon-btn" aria-label="Remove" onClick={() => remove(item.cartId)}><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
        <div className="drawer-foot">
          <p>Total: <b>${total.toFixed(2)}</b></p>
          <button className="btn btn-dark" onClick={checkout}>CHECKOUT</button>
        </div>
      </aside>
    </>
  )
}