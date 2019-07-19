import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { axiosWithAuth } from "../authorization/axiosWithAuth";



const Login = ({touched, errors }) => {
  


  return (
    <Form className="form">

    <div className="form-group">
      <label className="label">User Name</label>
      <Field
        className="input"
        name="username"
        type="text"

      />
      <p>{touched.username && errors.username}</p>
    </div>

    <div className="form-group">
      <label className="label">Password</label>
      <Field
        className="input"
        name="password"
        type="password"
      />
      <p>{touched.password && errors.password}</p>
    </div>
    
    <button className="btn" type='submit' >Submit &rarr;</button>
  </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "Lambda School",
      password: "i<3Lambd4",
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6)
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),


  handleSubmit(values, formikBag) {
    const url ="/login";
    return(
      axiosWithAuth()
        .post(url, values)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
          formikBag.props.history.push("/friends-list");
          
        })
        .catch(err => {
          console.log(err);
        })
    )
      
  }
})(Login);



