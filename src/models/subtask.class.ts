export class Subtask {

    id: string;
    title: string;
    done: boolean;
   
    constructor(obj?: any) {
       
        this.id = obj ? obj.id : "";
        this.title = obj ? obj.title : "";
        this.done = obj ? obj.description : "";
    }
}