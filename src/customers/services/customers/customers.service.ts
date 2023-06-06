import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
    
        {
            id: 1,
            email: 'olasunkanmi@gmail.com',
           name: 'Olasunkanmi Okeowo',
        },
        {
            id: 2,
            email: 'tunde@gmail.com',
            name: 'Tunde Okeowo',
        },
        {
            id: 3,
            email: 'tunji@gmail.com',
            name: 'Tunji Fagade',
        },

    ];

    findCustomerById(id: number) {
        return this.customers.find((user) =>
        user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto)
    }

    getCustomers() {
        return this.customers
    }
}

