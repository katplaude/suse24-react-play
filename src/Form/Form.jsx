import {useState} from "react";
import * as Yup from "yup";
function Form(){

    const [passwordsMatch, setPasswordsMatch]= useState(true);
    const[formState, setFormState]= useState({})

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters long')
            .required('Name is required'),

        age: Yup.number()
            .positive('Age has to be a positive number')
            .integer('No floats')
            .min(18, 'You have to be more than 18 to enter')
            .required('Age is required'),

        email: Yup.string()
            .email('Provide a valid email')
            .required('Email is required'),

        password: Yup.string()
            .min(8, 'Password has to be more than 8 characters long')
            .required('Password is required'),

        passwordRep: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password is required')

    });


    console.log(formState)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await validationSchema.validate(formState, { abortEarly: false });
           
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <label>NAME:</label>
            <input name={"name"} type={"text"} />
            {errors.name && <div>{errors.name}</div>}


            <p>Your name is: {formState.name}</p>


            <label>AGE:</label>
            <input name={"age"} type={"number"} />
            {errors.age && <div>{errors.age}</div>}

            <label>EMAIL:</label>
            <input name={"email"} type={"text"} />
            {errors.email && <div>{errors.email}</div>}

            <label>PASSWORD:</label>
            <input name={"password"} type={"password"} />
            {errors.password && <div>{errors.password}</div>}

            <label>REPEAT PASSWORD:</label>
            <input name={"passwordRep"} type={"password"} />
            {errors.passwordRep && <div>{errors.passwordRep}</div>}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form
