import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// @NgModule装饰器用来为模块定义元数据
@NgModule({
  // declarations列出了应用中的顶层组件
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // BrowserModule提供了运行在浏览器中的应用所需要的关键服务（Service）和指令（Directive）
    // 这个模块所有需要在浏览器中跑的应用都必须引用
    BrowserModule
  ],
  // providers列出会在此模块中“注入”的服务（Service）
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
