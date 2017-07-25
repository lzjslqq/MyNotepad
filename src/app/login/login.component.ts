import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Component是Angular提供的装饰器函数，用来描述Compoent的元数据
// 其中selector是指这个组件的在HTML模板中的标签是什么
// template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
// styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls
@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #userNameRef type="text">
      <input #passwordRef type="password">
      <button  (click)='onClick(userNameRef.value,passwordRef.value)'>Login</button>
    </div>
  `,
  styles: [],
  // 在providers中配置AuthService
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {
  // 在构造函数中将AuthService示例注入到成员变量service中
  // 而且我们不需要显式声明成员变量service了
  constructor( @Inject('auth') private service) { }

  ngOnInit() {
  }

  public onClick(userName: string, password) {
    console.log(`username:${userName}` + '\n\r' + `password:${password}`);
    console.log(`auth result is ${this.service.loginWithCredentials(userName, password)}`);
  }
}
