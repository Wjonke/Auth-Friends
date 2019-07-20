import React from "react"
import { Form, Field, withFormik } from "formik"
import {axiosWithAuth} from "../authorization/axiosWithAuth"

const FriendsForm = (props, touched, errors) => {
  console.log("props", props)
  return (
    <Form className="form">
      
      <div className="form-group">
        <label className="label">
        
        <Field
          className="input"
          name="name"
          type="text"
        />
        Name
        </label>

        {touched.username && <p>{errors.username}</p>}
      </div>

      <div className="form-group">
        <label className="label">Age</label>

        <Field
          className="input"
          name="age"
          type="number"
        />

        <p>{touched.age && errors.age}</p>
      </div>

      <div className="form-group">
        <label className="label">
          
        <Field
          className="input"
          name="email"
          type="email"
        />
        Email
        </label>
        {touched.email && <p>{errors.email}</p>}
      </div>

      <button type="submit">Submit </button>
    </Form>
  )
}



export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: "",
    };
  },

  handleSubmit(values, formikBag) {
    const url="/friends";

    return (
      axiosWithAuth()
      .post(url, values)
      .then(res => {
        console.log(res)
        formikBag.props.setFriends(res.data)
        formikBag.props.history.push("/friends-list");
      })
      
      .catch(error => {
        console.log(error)
      })
    )
  }
})(FriendsForm)
