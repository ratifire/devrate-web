import * as Yup from 'yup';

const emailRegex =
  /^(?!.*\.\.)(?!.*@.*@)(?!.*\s)(?!.*[<>'"():;])[\p{L}0-9._%+-]{1,64}@[\p{L}0-9.-]{1,255}\.[\p{L}]{2,}$/u;

Yup.addMethod(Yup.string, 'email', function (message) {
  return this.test('email', message, function (value) {
    if (!value) return false;

    const trimmedValue = value.trim();
    const [localPart, domainPart] = trimmedValue.split('@');

    if (!localPart || !domainPart) return false;

    if (localPart.length < 1 || localPart.length > 64) return false;
    if (domainPart.length < 1 || domainPart.length > 255) return false;

    if (trimmedValue.length > 320) return false;

    if (/^[.@-]/.test(localPart) || /[.@-]$/.test(localPart)) return false;
    if (/^[.@-]/.test(domainPart) || /[.@-]$/.test(domainPart)) return false;

    return emailRegex.test(trimmedValue);
  }).required('modal.registration.required');
});

export const emailValidationSchema = Yup.string().email('modal.registration.email_invalid');
