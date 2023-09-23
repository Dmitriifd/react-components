import { ReactNode, useState } from 'react'
import { ToastContext } from './ToastService'
import { X } from 'react-feather'

type Toast = {
  id: string
  component: ReactNode
}

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (component: ReactNode, timeout = 3000) => {
    const id = crypto.randomUUID() as string
    setToasts((toasts) => [...toasts, { id, component }])
    setTimeout(() => hideToast(id), timeout)

    return id
  }

  const hideToast = (id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className="space-y-2 absolute bottom-4 right-4">
        {toasts.map(({ id, component }) => (
          <div key={id} className="relative">
            <button
              onClick={() => hideToast(id)}
              className="absolute top-2 right-2 p-1
            rounded-lg bg-gray-200/20 text-gray-800/60">
              <X />
            </button>
            <div>lorem ipsum more</div>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export { ToastProvider }
