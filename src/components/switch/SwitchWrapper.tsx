import { useState } from 'react'
import { Switch } from './Switch'

const SwitchWrapper = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
    </div>
  )
}

export { SwitchWrapper }
