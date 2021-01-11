export interface Usuario{
    id?: number,
    name: string,
    username: string,
    email: string, 
    address: { 
        street:string,
        city: string,
        zipcode: string,
        geo:{
            lat: number,
            lng: number
        }
    },
    phone: number,
    website: string,
    company:{ name: string}
};