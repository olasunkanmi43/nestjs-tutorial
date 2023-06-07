import { Request, Response } from 'express';
import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    searchCustomerById(id: number): import("../../types/Customer").Customer;
    getAllCustomers(): import("../../types/Customer").Customer[];
    createCustomer(createCustomerDto: CreateCustomerDto): void;
}
