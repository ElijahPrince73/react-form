import React from 'react';
import { Grid,Card, CardHeader, CardContent,  CardActions, TextField, Button, Typography } from '@mui/material';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, isValidEmail } from '../utils/composeValidators';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, formValues } from '../store/formSlice'

const Exercise = () => {
  const formData = useSelector(formValues);
  const dispatch = useDispatch();

  const handleSubmit = (values: { fullName: string, email: string }) => {
    dispatch(addUser(values))
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, invalid }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader title="Form" />
                  <CardContent>
                    <div className='form-input'>
                      <Field name="fullName">
                        {({ input, meta }) => (
                          <div>
                            <TextField {...input} fullWidth label="Full Name" />
                            {meta.error && meta.touched && <span className='error-message'>{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </div>
                    <div>
                      <Field name="email" validate={composeValidators(required, isValidEmail)}>
                        {({ input, meta }) => {
                          return (
                            <div>
                              <TextField {...input} fullWidth label="Email" id="fullWidth" />
                              {meta.error && meta.touched && <span className='error-message'>{meta.error}</span>}
                            </div>
                          )
                        }}
                      </Field>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" type="submit" disabled={invalid}>
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
              <strong>Full Name: {formData.fullName}</strong>
            </Typography>
            <Typography>
              <strong>Email: {formData.email}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Exercise
