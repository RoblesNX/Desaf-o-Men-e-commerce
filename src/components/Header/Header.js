import { Stack } from '@mui/material'

const Header = () => {
  return (
    <Stack pt={10}
      sx={{
        backgroundImage: 'url("https://i.imgur.com/qjJ7KdI.gif")',
        height: `600px`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
    </Stack>

  )
}

export default Header