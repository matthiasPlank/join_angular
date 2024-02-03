import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSelectionService {

  activeSelection:string = "summary"

  constructor() { 
    
  }
}
