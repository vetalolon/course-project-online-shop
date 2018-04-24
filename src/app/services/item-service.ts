import { Injectable } from "@angular/core";
import { item } from "../models/item.model";

@Injectable()
export class ItemService {
  items: item[] = [
    new item("Title","Desc",33,"http://peifoodies.com/wp-content/uploads/2016/04/HOPburger-070.jpg"),
    new item("Title","Desc",33,"http://peifoodies.com/wp-content/uploads/2016/04/HOPburger-070.jpg"),
    new item("Title","Desc",33,"http://peifoodies.com/wp-content/uploads/2016/04/HOPburger-070.jpg"),
    new item("Title","Desc",33,"http://peifoodies.com/wp-content/uploads/2016/04/HOPburger-070.jpg")
  ] 
  getAllItems(){
    return this.items;
  }
}