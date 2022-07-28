import ClientOAuth2 from "client-oauth2"
import { Button, Container, Stack, TextField, Typography } from "@mui/material"

const auth = new ClientOAuth2({
  clientId: process.env.REACT_APP_OAUTH2_CLIENT_ID,
  clientSecret: process.env.REACT_APP_OAUTH2_CLIENT_SECRET,
  accessTokenUri: process.env.REACT_APP_OAUTH2_TOKEN_URI,
  authorizationUri: process.env.REACT_APP_OAUTH2_AUTHORIZATION_URI,
  scopes: ["email", "offline_access", "openid"],
})

export const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get("email")
    const password = formData.get("password")

    const token = await auth.owner.getToken(email, password)
    console.log(token)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h2">Login</Typography>
          <TextField
            fullWidth
            id="email"
            label="email"
            name="email"
            type="email"
            variant="standard"
          />
          <TextField
            fullWidth
            id="password"
            label="password"
            name="password"
            type="password"
            variant="standard"
          />
          <Button color="primary" fullWidth type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
