import { Contact } from "./contact.class";
import { Subtask } from "./subtask.class";

export class Task {

    id: string;
    title: string;
    description: string;
    category: string;
    createdAt: Date;
    assigned: Contact[];
    kanban: string;
    priority: string;
    subtasks: Subtask[]; 

    constructor(obj?: any) {
       
        this.id = obj ? obj.id : "";
        this.title = obj ? obj.title : "";
        this.description = obj ? obj.description : "";
        this.category = obj ? obj.category : "";
        this.createdAt = obj ? obj.createdAt : "";
        this.assigned = obj ? obj.assigned : "";
        this.kanban = obj ? obj.kanban : "";
        this.priority = obj ? obj.priority : "";
        this.subtasks = obj ? obj.subtasks : "";

    }
}