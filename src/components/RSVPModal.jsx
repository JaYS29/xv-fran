import { useState } from 'react'
import './RSVPModal.css'

const WHATSAPP_NUMBER = '5491140565189'

const RESTRICTION_OPTIONS = [
  { id: 'celiaca',      label: 'Celíaca' },
  { id: 'vegetariana',  label: 'Vegetariana' },
  { id: 'vegana',       label: 'Vegana' },
  { id: 'lactosa',      label: 'Intolerancia a la lactosa' },
  { id: 'diabetes',     label: 'Diabetes' },
  { id: 'otros',        label: 'Otros' },
]

export default function RSVPModal({ onClose }) {
  const [nombre, setNombre]           = useState('')
  const [apellido, setApellido]       = useState('')
  const [tieneRestr, setTieneRestr]   = useState(null) // null | 'si' | 'no'
  const [checked, setChecked]         = useState({})
  const [otrosText, setOtrosText]     = useState('')

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const handleSend = () => {
    const name = `${nombre.trim()} ${apellido.trim()}`.trim()
    let restrText = ''
    if (tieneRestr === 'si') {
      const selected = RESTRICTION_OPTIONS
        .filter(r => checked[r.id])
        .map(r => r.id === 'otros' && otrosText ? `Otros: ${otrosText}` : r.label)
      restrText = selected.length > 0
        ? `Restricciones: ${selected.join(', ')}`
        : 'Sin restricciones especificadas'
    } else {
      restrText = 'Sin restricciones alimentarias'
    }

    const msg = encodeURIComponent(
      `Hola! Confirmo mi asistencia a los XV de Francisca.\nNombre: ${name || '—'}\n${restrText}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <h2>Confirmar asistencia</h2>
          <div className="modal-rule" />
        </div>

        <div className="modal-body">

          {/* Nombre y Apellido */}
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-input"
              placeholder="Tu nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-input"
              placeholder="Tu apellido"
              value={apellido}
              onChange={e => setApellido(e.target.value)}
            />
          </div>

          {/* Toggle restricciones */}
          <div className="form-group restr-toggle-group">
            <p className="form-label restr-title">Tenés alguna restricción alimentaria?</p>
            <div className="toggle-options">
              {['si', 'no'].map(opt => (
                <label key={opt} className={`toggle-chip ${tieneRestr === opt ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="restriccion"
                    value={opt}
                    checked={tieneRestr === opt}
                    onChange={() => setTieneRestr(opt)}
                  />
                  {opt === 'si' ? 'Sí' : 'No'}
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes restricciones (solo si 'si') */}
          {tieneRestr === 'si' && (
            <div className="restr-section">
              <div className="checkbox-grid">
                {RESTRICTION_OPTIONS.map(r => (
                  <label key={r.id} className={`checkbox-item ${checked[r.id] ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={!!checked[r.id]}
                      onChange={() => toggle(r.id)}
                    />
                    <span className="checkbox-custom" />
                    <span className="checkbox-label">{r.label}</span>
                  </label>
                ))}
              </div>
              {checked.otros && (
                <div className="otros-wrap">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Especificá tu restricción..."
                    value={otrosText}
                    onChange={e => setOtrosText(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="send-btn" onClick={handleSend}>
            Enviar formulario
          </button>
        </div>
      </div>
    </div>
  )
}
