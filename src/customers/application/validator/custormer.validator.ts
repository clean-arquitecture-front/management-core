import { required } from "@vuelidate/validators";

export const validatorCustomer = {
    name: { required },
    lastName: { required },
    dni: { required }
};