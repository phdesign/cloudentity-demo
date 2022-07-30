import { useNavigate } from "react-router-dom"
import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { useAuth } from "../hooks/use-auth"

export const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get("username")
    const password = formData.get("password")

    await login(username, password)
    navigate("/")
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h2">Login</Typography>
          <TextField
            fullWidth
            id="username"
            label="username"
            name="username"
            type="text"
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
