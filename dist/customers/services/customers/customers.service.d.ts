import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';
export declare class CustomersService {
    private customers;
    findCustomerById(id: number): Customer;
    createCustomer(customerDto: CreateCustomerDto): void;
    getCustomers(): Customer[];
}
