
export class User {
    constructor(
        public id: string,
        public first_name: string,
        public last_name: string,
        public Address: Address,
    ){}
}

export class Address {
    constructor(
        public address_1: string,
        public address_2: string,
        public city: string,
        public state: string,
        public zip_code: string,
        public country: string
        
    ){}
}