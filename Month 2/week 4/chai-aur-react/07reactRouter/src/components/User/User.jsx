import { useParams } from "react-router-dom"

const User = () => {
    const { userid } = useParams()
  return (
    <div className="text-center text-3xl p-4 text-orange-700 bg-gray-600">User: {userid}</div>
  )
}

export default User