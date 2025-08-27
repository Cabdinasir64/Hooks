import { useEffect } from "react"
import useUserStore from "./Zustand10"

export default function UserProfile({ userId }) {
  const { user, loading, error, fetchUser, logout } = useUserStore()

  useEffect(() => {
    fetchUser(userId)
  }, [userId, fetchUser])

  if (loading) return <p>Loading user...</p>
  if (error) return <p>Error: {error}</p>
  if (!user) return <p>No user data</p>

  return (
    <div className="p-4 border rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}
