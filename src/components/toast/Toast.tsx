import { AlertCircle, LogIn, Shield, Zap } from 'react-feather'
import { useToast } from './ToastService'

const Toast = () => {
  const toast = useToast()
  const handleFail = () => {
    toast.showToast(
      <div>
        <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
          <AlertCircle size={40} />
          <div>
            <h3 className="font-bold">Action Failed</h3>
            <p className="text-sm">This action failed miserably</p>
          </div>
        </div>
      </div>
    )
  }
  const handleLogin = () => {
    toast.showToast(
      <div>
        <div className="flex gap-2 bg-blue-300 text-blue-800 p-4 rounded-lg shadow-lg">
          <Shield size={40} />
          <div>
            <h3 className="font-bold">Autheticated</h3>
            <p className="text-sm">You are logged in seccessfully</p>
          </div>
        </div>
      </div>
    )
  }
  const handleActivate = () => {
    const id = toast.showToast(
      <div>
        <div className="flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg">
          <Zap size={40} />
          <div>
            <h3 className="font-bold">Activated</h3>
            <p className="text-sm">Item activated successfully</p>
          </div>
        </div>
      </div>,
      1000
    )
    // toast.close(id)
  }

  return (
    <div className="flex items-center min-h-full gap-4 justify-center mt-5">
      <button className="btn btn-danger" onClick={handleFail}>
        <AlertCircle /> Fail
      </button>
      <button className="btn btn-info" onClick={handleLogin}>
        <LogIn /> Login
      </button>
      <button className="btn btn-success" onClick={handleActivate}>
        <Zap /> Activate
      </button>
    </div>
  )
}

export { Toast }
