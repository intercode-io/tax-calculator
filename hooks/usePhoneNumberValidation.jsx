export function usePhoneNumberValidation(phoneNumber) {
    function validatePhoneNumber() {
        const phoneNumberRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        return phoneNumberRegex.test(phoneNumber);
    }

    return validatePhoneNumber();
}