import React , { forwardRef, Ref } from "react"
import { Check, X } from "react-feather"

type Props ={
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}

const Switch = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <label className="cursor-pointer">
      <input type="checkbox" className="hidden" ref={ref} {...props} />
      <div className={`w-14 p-1 rounded-full ${props.checked ? 'bg-blue-200' : 'bg-blue-200'}`}>
        <div
          className={`
              w-fit p-0.5 shadow-sm rounded-full
              transition-all duration-300 text-white
              ${props.checked ? 'bg-blue-500 translate-x-6 rotate-0' : 'bg-gray-400 -rotate-180'}
              `}>
          {props.checked ? <Check size={20} /> : <X size={20} />}
        </div>
      </div>
    </label>
  )
})

export { Switch }