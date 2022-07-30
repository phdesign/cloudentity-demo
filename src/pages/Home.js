import { Link } from "react-router-dom"
import { Button, Container, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../hooks/use-auth"

export const HomePage = () => {
  const { token } = useAuth()
  const [userInfo, setUserInfo] = useState(null)

  const handleClick = async () => {
    const resp = await fetch(
      "https://<tenantname>.us.authz.cloudentity.io/<tenantname>/<workspace>/userinfo",
      token.sign({})
    )
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`)
    }
    const userInfo = await resp.json()
    setUserInfo(userInfo)
  }

  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h2">Cloudentity Client Demo</Typography>
        {token ? (
          <>
            <Typography>
              Welcome {userInfo ? userInfo.email : "anonymous"}!
            </Typography>
            <Button variant="contained" onClick={handleClick}>
              Get user info
            </Button>
          </>
        ) : (
          <Button component={Link} variant="contained" to="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  )
}
