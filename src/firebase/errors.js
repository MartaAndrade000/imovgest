export const errorMessages = (message) => {
    switch (message) {
        case "auth/email-already-in-use": return "Email already in use"
        default:
            return "Firebase error, pwease contact admin"
    }
}
