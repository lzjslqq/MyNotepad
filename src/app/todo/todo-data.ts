import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
    createDb() {

        const todos: Todo[] = [
            { id: '666666', desc: 'Getting up', completed: true },
            { id: '777777', desc: 'Go to school', completed: false }
        ];
        return { todos };
    }
}
