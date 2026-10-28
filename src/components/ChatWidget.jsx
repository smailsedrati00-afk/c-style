import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const quickReplies = ['Find an item', 'Style me for an occasion', 'Vibe check quiz', 'Offers for C-Style']

function getReply(text) {
  const t = text.toLowerCase()
  if (t.includes('item') || t.includes('find')) return 'Try the search bar at the top, or pick a category above!'
  if (t.includes('occasion') || t.includes('style')) return 'For a date night, check our Dresses. For daily wear, try Tops and Jeans.'
  if (t.includes('quiz') || t.includes('vibe')) return 'Do you prefer cozy, classic or bold? Tell me and I will suggest a collection.'
  if (t.includes('offer') || t.includes('discount')) return 'Students get 10% off with the code STUDENT10.'
  return 'Thanks! A team member will help you soon. You can also try the quick options.'
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([{ from: 'bot', text: "Hi! I'm your shopping buddy. How can I help you today?" }])

  function send(message) {
    if (!message.trim()) return
    setMessages((old) => [...old, { from: 'user', text: message }, { from: 'bot', text: getReply(message) }])
    setText('')
  }

  if (!open) {
    return (
      <button className="chat-fab" aria-label="Open chat" onClick={() => setOpen(true)}>
        <MessageCircle size={24} />
      </button>
    )
  }

  return (
    <div className="chat">
      <div className="chat-head">
        <b>C-Style Assistant</b>
        <button className="icon-btn" aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button>
      </div>
      <div className="chat-body">
        {messages.map((m, i) => (
          <p key={i} className={'bubble ' + m.from}>{m.text}</p>
        ))}
        <div className="quick">
          {quickReplies.map((q) => (
            <button key={q} onClick={() => send(q)}>{q}</button>
          ))}
        </div>
      </div>
      <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(text) }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask me anything..." />
        <button type="submit" className="icon-btn" aria-label="Send"><Send size={18} /></button>
      </form>
    </div>
  )
}