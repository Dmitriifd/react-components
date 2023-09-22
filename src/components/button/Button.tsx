const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="flex gap-2 px-4 py-2
      text-sm rounded-lg bg-blue-600
      text-white font-medium">
      {children}
    </button>
  )
}

export default Button
