import { Button, Container, Stack, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Container>
      <form>
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
