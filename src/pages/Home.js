import { Link } from "react-router-dom"
import { Button, Container, Stack, Typography } from "@mui/material"

export const HomePage = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h2">Cloudentity Client Demo</Typography>
        <Button component={Link} variant="contained" to="/login">
          Login
        </Button>
      </Stack>
    </Container>
  )
}
