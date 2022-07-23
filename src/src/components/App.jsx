import { Box, Button, CssBaseline, Grid, Stack, Typography } from '@mui/material';
import { TestForm } from './TestForm/TestForm';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Box sx={{ p: 2 }}>
            <Typography
              variant={'h4'}
              textAlign={'center'}
            >
              Hello template vite + react + material ui + prettier + eslint
            </Typography>
            <Stack
              sx={{ mt: 2 }}
              spacing={2}
              direction={'row'}
              justifyContent={'center'}
              alignItems={'center'}
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
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
            <Typography
              variant={'h4'}
              sx={{ textAlign: 'center', mb: 2 }}
            >
              React-hook-form fields
            </Typography>
            <TestForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
