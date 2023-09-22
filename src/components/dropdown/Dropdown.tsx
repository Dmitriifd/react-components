import { useClickOutside } from '@hooks/useClickOutside'
import { useState } from 'react'

type Props = { children: React.ReactNode; trigger: React.ReactNode }

const Dropdown = ({ children, trigger }: Props) => {
  const [show, setShow] = useState(false)
  const dropRef = useClickOutside(() => setShow(false))

  return (
    <div ref={dropRef} className="w-fit relative" onClick={() => setShow((curr) => !curr)}>
      <div>{trigger}</div>
      {show && (
        <ul
          className={`
        min-w-max absolute right-0 mt-2
        bg-white divide-y divide-gray-100
        rounded-lg shadow overflow-hidden
      `}>
          {children}
        </ul>
      )}
    </div>
  )
}

export default Dropdown

export function DropdownItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={`
        flex gap-2 items-center px-4 py-2 text-gray-800
        hover:bg-gray-50 cursor-pointer
      `}>
      {children}
    </li>
  )
}
