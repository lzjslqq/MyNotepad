import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {

  private api_url = 'api/todos';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  todos: Todo[] = [];

  constructor(private http: Http) { }

  addTodo(desc: string): Promise<Todo> {

    const todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };

    this.todos.push(todo);
    return this.http.post(this.api_url, JSON.stringify(todo), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
