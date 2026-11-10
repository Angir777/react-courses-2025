import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css";

const SignupForm = () => {
  // Initialized data
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
  };

  // Defining Validation Schema Using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .required("Name is required"),
    email: Yup.string()
      .email("Incorrect email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikBag) => {
        alert("Form sent!");
        console.log("Data sent:", values);
        console.log(formikBag);
        formikBag.resetForm();
      }}
    >
      {(props) => {
        console.log(props);
        return (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" className="form-control" />
              <ErrorMessage name="password">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>

            <button type="submit" disabled={props.isSubmitting}>
              Send
            </button>
          </Form>
        )
      }}
    </Formik>
  );
};

export default SignupForm;
