import { Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import React from 'react';

const UserDetails = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset();
      };
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} className='login-input' type="email" placeholder="Email" label="Email" variant="outlined" required /> <br />
                    <input className='login-input' type="password" placeholder="Password" label="Password" variant="outlined" required {...register("password")} /> <br />
                    {/* <Button type="submit" variant="contained" color="primary" onClick={handleClick} disabled={isFetching}>Login</Button> */}
                    <input type="submit" className="btn solid" />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                </form>
            </Grid>
        </Grid>
    );
};

export default UserDetails;