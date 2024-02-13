import { Customer } from "../../../domain/customer.domain";
export interface ListCustomerPort {
    listCustomer(params: any): Promise<Customer[]>;
}
