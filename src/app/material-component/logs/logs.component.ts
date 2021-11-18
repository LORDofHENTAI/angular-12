import { Component } from '@angular/core';

class LogList {
  constructor(
    public ModuleName: string,
    public Date: string,
    public Message: string,
    public Status: number
  ) { }
}

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent {

  myDate = new Date();
  loglist: LogList[] = [
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 1 },
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 2 },
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 3 },
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 4 },
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 5 },
    { ModuleName: "Имя модуля", Date: "Дата", Message: "Сообщение", Status: 6 },
  ];


}
