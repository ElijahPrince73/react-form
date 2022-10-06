import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Form } from 'react-final-form';

function ExerciseComponent() {
  const handleSubmit = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ form, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} noValidate>
                <Card>
                  <CardHeader title="Form" />
                  <CardContent></CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" type="submit">
                      Submit
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Submitted Form" />
          <CardContent>
            <Typography>
              <strong>Full Name: </strong>
            </Typography>
            <Typography>
              <strong>Email: </strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export const Exercise = ExerciseComponent;
