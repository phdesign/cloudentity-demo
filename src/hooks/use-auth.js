import ClientOAuth2 from "client-oauth2"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const value = useProvideAuth()
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useProvideAuth = () => {
  const [auth, setAuth] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const auth = new ClientOAuth2({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      accessTokenUri: process.env.REACT_APP_TOKEN_URI,
      authorizationUri: process.env.REACT_APP_AUTHORIZATION_URI,
      scopes: ["email", "offline_access", "openid"],
    })
    setAuth(auth)
  }, [])

  const login = async (username, password) => {
    const newToken = await auth.owner.getToken(username, password)
    setToken(newToken)
  }

  return { login, token }
}
