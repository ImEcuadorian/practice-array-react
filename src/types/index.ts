export type LoginForm = {
    username: string;
    password: string;
}

export type Person = {
    username: string;
    firstName: string;
    email: string;
    password: string;
}

export type PersonFormRegister = {
    username: string;
    firstName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type Persons = Person[]