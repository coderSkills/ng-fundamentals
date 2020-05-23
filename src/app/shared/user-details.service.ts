import { Injectable } from '@angular/core';


@Injectable()
export class UserDetailsService {
    getUsers (){

        return users;
    }
    getUser (id: any){

        return users[id];
    }
}

const users = [
    {
        id: 1,
        firstName: 'parthasarathi',
        lastName: 'Logakannan',
        displayName: 'Parthasarathi Logakannan'
    },
    {
        id: 2,
        firstName: 'Priyanka',
        lastName: 'Selvam',
        displayName: 'Priyanka Selvam'
    }
]