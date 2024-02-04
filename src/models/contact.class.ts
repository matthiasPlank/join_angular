export class Contact {

    id: string;
    fistname: string;
    lastname: boolean;
   
    constructor(obj?: any) {
       
        this.id = obj ? obj.id : "";
        this.fistname = obj ? obj.fistname : "";
        this.lastname = obj ? obj.lastname : "";
    }
}