import { ReactNode, createContext, useContext } from 'react'

type ToastContextType = {
  showToast: (toast: ReactNode, timeout?: number) => void
  hideToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType>({} as ToastContextType)
export const useToast = () => useContext(ToastContext)

export { ToastContext }
