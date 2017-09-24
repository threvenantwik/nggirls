import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
      input Works!
    </p>
<input [value]="generateNewTitle()" #Wiktoria>
<button class="todo-add" (click)="addItem(Wiktoria.value)">Save</button>
<input [value]="Wiktoria.value">
<p>The title is: {{ title }}</p>
<ul>
  <li *ngFor="let item of todoList">
    {{item.title}} was {{item.level}}
<button (click)="removeItem(item)">Remove</button>
</li>
</ul>
<button (click)="login()">Log in</button>
<button (click)="logout()">Log out</button>
<h2 *ngIf="userLoggedin">Welcome</h2>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    title = "input";
    private todoList = [
        { title: 'install NodeJS', level: 'hard' },
        { title: 'install Angular CLI', level: 'medium' },
        { title: 'create new app',level: 'super easy' },
        { title: 'serve app' },
        { title: 'develop app' },
        { title: 'deploy app' },
    ];
    userLoggedin = false;
    constructor()
    {
        this.changeTitle('I love Angular');
    }
    changeTitle(newtitle: string): void {
        
        this.title = newtitle;
        /*if (event.target) {
            console.log(event);
            this.title = event.target.value;
        } else {
            this.title = 'tjis is a title';*/

        //}
        
    }

    
    ngOnInit() {
        /*setTimeout(() => {
            this.title = 'This is not the title you are looking for';
        }, 3000);*/
  }
    generateNewTitle() :string
    {
        return "this is an awesome title";
    }

    login() {
        this.userLoggedin = true;
    }

    logout() {
        this.userLoggedin = false;
    }
    addItem(newItem: string): void {
        this.todoList.push({ title: newItem });
    }
    removeItem(item) {
        this.todoList.splice(this.todoList.indexOf(item), 1);
    }
}
