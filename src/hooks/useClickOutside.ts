import { useEffect, useRef } from 'react'

type CallbackFn = () => void

const useClickOutside = (callbackFn: CallbackFn): React.MutableRefObject<HTMLDivElement | null> => {
  let domNodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (!domNodeRef.current?.contains(event.target as Node)) {
        callbackFn()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return domNodeRef
}

export { useClickOutside }
