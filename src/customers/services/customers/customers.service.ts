import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[] = [
        {
            id: 1,
            email: 'co@gmail.com',
            name: 'Charles',
        },
        {
            id: 2,
            email: 'vo@gmail.com',
            name: 'Victolyne',
        },
        {
            id: 3,
            email: 'lo@gmail.com',
            name: 'Victolyne',
        },
    ];

    findCustomers() {
        return this.customers;
    }

    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(createCustomerDto: CreateCustomerDto) {
        this.customers.push(createCustomerDto);
    }
}
