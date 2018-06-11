import {Injectable} from "@angular/core";
import {Task} from "../models/task.model";

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getAll() {

  }
}
