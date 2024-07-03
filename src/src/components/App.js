import { Box, Button, Card, CardContent, CardHeader, CssBaseline, Grid, Stack, Typography } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { TestForm } from './TestForm/TestForm';

const App = () => {
  const [page, setPage] = useState(1);
  // Access the client
  const queryClient = useQueryClient();

  const getTodos = (page) => {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}_limit=20`)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error));
    });
  };

  // Queries
  const { data, isError, isLoading } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => getTodos(page),
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: (variables) => {
      console.log(variables);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <React.Fragment>
      <CssBaseline />

      <Button
        variant={'contained'}
        onClick={() => setPage((prev) => prev + 1)}
      >
        next page
      </Button>

      <Button
        variant={'contained'}
        onClick={() => setPage((prev) => prev - 1)}
      >
        prev page
      </Button>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button>

      {data.length === 0 && <div>Not found...</div>}
      <Grid
        container
        spacing={2}
        sx={{ p: 16 }}
      >
        {data.map((item) => (
          <Grid
            key={item.id}
            item
            xs={3}
          >
            <Card sx={{ height: '100%' }}>
              <CardHeader title={item.title}></CardHeader>
              <CardContent>{item.body}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
              Hello template vite + react + material ui + biome
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
                onChange={() => null}
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
    </React.Fragment>
  );
};

export default App;
