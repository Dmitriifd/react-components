import { ReactNode, useEffect } from 'react'
import { useStyle } from '@hooks/useStyle'
import { X } from 'react-feather'

type Modal = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ open = true, onClose, children }: Modal) => {
  const [, setOverflow] = useStyle('overflow')

  const onKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        return onClose()
      default:
        return
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  useEffect(() => (open ? setOverflow('hidden') : setOverflow('auto')), [open])

  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
      fixed inset-0 flex justify-center items-center
      transition-colors
      ${open ? 'visible bg-black/20' : 'invisible'}
    `}>
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-white rounded-xl shadow p-6 transition-all
        ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
      `}>
        <button onClick={onClose} className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-400">
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
