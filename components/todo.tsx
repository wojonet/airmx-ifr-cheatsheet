const Todo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-200 p-4 rounded-md mb-4">
      <div className="text-blue-700 text-sm">{children}</div>
    </div>
  )
}

export default Todo
