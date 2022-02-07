import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import fetchUser from './services/user'
import { UserProvider, useUser } from './context/UserContext'

function App() {
  // inital value should match the data type of end value
  const { user, setUser } = useUser({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])

  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
