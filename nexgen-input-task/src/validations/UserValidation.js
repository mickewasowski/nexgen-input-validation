import * as yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,12}$/;
const phoneNumberRegex = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{4}$/;
const websiteUrlRegex = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

export const userSchema = yup.object().shape({
    fullName: yup.string().required().min(4).max(30),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(16).max(70),
    password: yup.string().required().matches(passwordRegex),
    birthDate: yup.date().min("1952-01-01").max("2006-01-01"),
    phoneNumber: yup.string().matches(phoneNumberRegex),
    website: yup.string().matches(websiteUrlRegex),
    bio: yup.string().max(40)
})