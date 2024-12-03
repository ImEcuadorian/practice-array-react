import React, {FormEvent, useState} from "react";
import Form from "./components/Form.tsx";
import ListData from "./components/ListData.tsx";
import RegisterForm from "./RegisterForm.tsx";
import LoginForm from "./components/LoginForm.tsx";
import {Person, PersonFormRegister} from "./types";
import {persons} from "./data/persons.ts";

const initialPersonFormState: PersonFormRegister = {
    username: '',
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const initialPersonState = persons;

const App = () => {

    const [formData, setFormData] = React.useState<PersonFormRegister>(initialPersonFormState);
    const [data, setData] = useState<Person[]>(initialPersonState)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match")
            return
        }
        setData([...data, formData])
        setFormData(initialPersonFormState)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Create Account</h1>
            <LoginForm  />
            <RegisterForm />

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <Form formData={formData} setFormData={setFormData}/>

                    <div className="mt-4 flex justify-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <div className="mt-8 max-w-md mx-auto">
                <ListData data={data}/>
            </div>
        </div>
    )
}

export default App
