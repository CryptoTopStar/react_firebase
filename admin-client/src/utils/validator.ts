export class Validator {

    static isValidEmail(email: string): boolean {
        const regexEmail = /^^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        return regexEmail.test(email);
    }

    static isValidPassword(password: string): boolean {
        return password.length >= 6;
    }

}