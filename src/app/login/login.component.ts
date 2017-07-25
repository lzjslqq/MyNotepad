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
      <input required minlength='3'
      [(ngModel)]='userName' #userNameRef='ngModel' type="text" />{{userNameRef.errors | json}}
      <div *ngIf='userNameRef.errors?.required'>用户名必填</div>
      <div *ngIf='userNameRef.errors?.minlength'>用户名至少要三个字符</div>
      <input required [(ngModel)]='password' #passwordRef='ngModel' type="password" />{{passwordRef.valid}}
      <div *ngIf='passwordRef.errors?.required'>密码必填</div>
      <button  (click)='onClick()'>Login</button>
    </div>
  `,
  styles: [],
  // 在providers中配置AuthService
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  // 在构造函数中将AuthService示例注入到成员变量service中
  // 而且我们不需要显式声明成员变量service了
  // 修饰符Inject('auth')的意思是到系统配置中找到名称为auth的那个依赖注入到修饰的变量中
  constructor( @Inject('auth') private service) { }

  ngOnInit() {
  }

  public onClick() {
    console.log(`username:${this.userName}` + '\n\r' + `password:${this.password}`);
    console.log(`auth result is ${this.service.loginWithCredentials(this.userName, this.password)}`);
  }
}
