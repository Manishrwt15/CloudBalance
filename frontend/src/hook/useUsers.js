import { useEffect, useState } from 'react'
import { getUser, createUser, updateUser, } from '../api/userApi'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const res = await getUser();
      setUsers(res?.data|| [])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const addUser = async (data) => {
    await createUser(data)
    fetchUsers()
  }

  const editUser = async (id, data) => {
    await updateUser(id, data)
    fetchUsers()
  }


  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    users,
    loading,
    error,
    addUser,
    editUser
  }
}

export default useUsers
