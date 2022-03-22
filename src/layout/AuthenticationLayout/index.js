import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMutation } from 'react-query' 
import axios from 'axiosConfig'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthenticationLayout = () => {

  const { email: currentUserEmail } = useSelector(state => state.currentUser)
  const navigate = useNavigate()

  const { mutate } = useMutation(async () => axios.get('/users/me'), {
    onSuccess: () => {
      navigate('/')
    }
  })

  useEffect(() => {
    if(!currentUserEmail) mutate()
  },[currentUserEmail, mutate])

  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthenticationLayout