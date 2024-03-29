import { Customer } from "../../domain/customer.domain";

import { RestPort } from "../../../shared/infraestructure/port/out/rest.port";
import { getRestAxiosPort } from "../../../shared/application/container/container-out-port.util";
import { ListCustomerPort } from "@/customers/infraestructure/port/in/list-customer.port";

export class ListCustomerUseCase implements ListCustomerPort {

    private static instance: ListCustomerUseCase;
    private restPort: RestPort = getRestAxiosPort();

    private constructor() { }

    static getInstance(): ListCustomerUseCase {
        if (!ListCustomerUseCase.instance) {
            ListCustomerUseCase.instance = new ListCustomerUseCase();
        }
        return ListCustomerUseCase.instance;
    }

    listCustomer(params: any): Promise<Customer[]> {
        return this.restPort.get("/v1/customer", params);
    }
}