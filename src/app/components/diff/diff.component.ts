import { Component, OnInit } from '@angular/core';

interface User {
  id: number,
  name: string,
  secondName: string,
  tem: string,
}

@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {
  testArray = [2, 5, 7];
  exp: boolean = false;



  users: User[] = [
    {id: 1, name: 'Boris', secondName: 'Britva', tem: 'bold'},
    {id: 2, name: 'Denis', secondName: 'Redis', tem: 'italic'},
    {id: 2, name: 'Vasia', secondName: 'Hmuri', tem: 'unknown'}
  ]

  deepObject = {
    user: {name: 'Boris', secondName: 'Britva'}
  }

  constructor() { }

  ngOnInit(): void {
  }

onInput(event: Event) {
  // const target = event.target.value - будет содержать ошибку Property 'value' does not exist on type 'EventTarget'
  // в target содержится ссылка на HTML елемент. Свойство value содержится не у каждого HTML элемента. Поэтому для доступа к нему
  // нужно обозначить, что это именно input
  const target1 = event.target
  const target = event.target as HTMLInputElement
  console.log(target1)
  console.log(target)
}

onInput2(value: any) {
  console.log(value)
}


trackBy(index: number, user: User) {
  return user.id
}

}
