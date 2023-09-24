import { createPortal } from 'react-dom'
import { useState } from 'react'
import { Trash } from 'react-feather'
import Modal from './Modal'

const ModalWrapper = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="flex gap-2 items-center px-3 py-2 bg-red-600 shadow-red-400/20 rounded-lg text-white font-semibold">
        <Trash size={20} /> Delete
      </button>
      {createPortal(
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-[420px]">
            <Trash size={50} className="mx-auto text-red-500" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">Confirm delete</h3>
              <p className="text-sm text-gray-500">Are you sure you want to delete this item?</p>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="px-3 py-1 bg-red-600 shadow rounded-lg text-white">Delete</button>
              <button onClick={() => setOpen(false)} className="px-3 py-1 bg-white shadow">
                Cancel
              </button>
            </div>
          </div>
        </Modal>,
        document.querySelector('#modals') || document.body
      )}
    </div>
  )
}

export default ModalWrapper
