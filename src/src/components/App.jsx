import { Button, Container, Stack, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <div className={'content'}>
        <Typography
          sx={{ mt: 5 }}
          variant={'h4'}
          textAlign={'center'}
        >
          Hello template vite + react + material ui + prettier + eslint
        </Typography>
        <Stack
          sx={{ mt: 2 }}
          spacing={2}
          alignContent={'flex-start'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          direction={'column'}
        >
          <Button
            variant={'outlined'}
            title={''}
            onChange={() => {}}
          >
            Outlined
          </Button>
          <Button variant={'text'}>Test</Button>
          <Button variant={'contained'}>Contained</Button>
        </Stack>
      </div>
    </Container>
  );
};

export default App;
