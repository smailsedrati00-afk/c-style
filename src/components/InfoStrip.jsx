import { Truck, RotateCcw, CreditCard, MapPin } from 'lucide-react'

export default function InfoStrip({ showToast }) {
  const items = [
    { icon: <Truck size={20} />, title: 'FREE SHIPPING', text: 'On orders over $75', info: 'Free shipping applies to all orders over $75.' },
    { icon: <RotateCcw size={20} />, title: 'EASY RETURNS', text: '30-day return policy', info: 'You can return any item within 30 days.' },
    { icon: <CreditCard size={20} />, title: 'SECURE PAYMENT', text: '100% secure checkout', info: 'All payments are encrypted and secure.' },
    { icon: <MapPin size={20} />, title: 'STORES NEAR YOU', text: 'Find a C-Style store', info: 'Use the "Find store" button in the "Visit us in store" banner below.' },
  ]

  return (
    <section className="info-strip">
      {items.map((item) => (
        <button key={item.title} className="info-item" onClick={() => showToast(item.info)}>
          {item.icon}
          <span>
            <b>{item.title}</b>
            <small>{item.text}</small>
          </span>
        </button>
      ))}
    </section>
  )
}