import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h2>this is homepage</h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstname", { required: true })} />
        {errors.firstname && <p> Required.</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
