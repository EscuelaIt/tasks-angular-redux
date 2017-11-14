import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
