
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';


/* A.
 * 1. inital values populates initial fiels values of the form. also it makes the values available to the render method as values (values.email, values.password)
 2. Then validate form using the forms values. initalize an empty erros obejct to store error messages. 
 3. if values.email is false then assign errors.email to required
 4. Then check to see if the email entered is a valid email adress using REGEX.
 5. submission form handler. pass in the forms values and a promise which then shows an alert box with the submitted form values in a JSON object. 
 6. We have a form component. In the Form component we have a Field component which hook up inputs into Formik. 
    a. inputs use name attribute to match up with Formik state (values.emai, values.password)
7. Assign email and password with length validation 
8. Styling error message but wrapping it in a span tag and giving it a style attribue
 */

class UserForm extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               
                <h1>Any place in your app!</h1>
                <Formik
                    /* A. */
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        } /*A.*/else if(values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }
                    /*A.*/ if(!values.password) {
                            errors.email = 'Required';
                        } else if(values.password.length < 8){
                            errors.email = 'Password too short';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <span style={{color:"red", fontWeight: "bold"}}>     
                                <ErrorMessage name="email" component="div" />
                            </span>
                           
                            <Field type="password" name="password" />
                            {/* A. */}<span style={{color:"red", fontWeight:"bold"}}>
                                <ErrorMessage name="password" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                                </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}


export default UserForm;
