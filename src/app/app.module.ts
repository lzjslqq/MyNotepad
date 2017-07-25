import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

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
  // provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。
  // useClass指明这个名称对应的服务是一个类，本例中就是AuthService
  providers: [{ provide: 'auth', useClass: AuthService }],
    // bootstrap指明哪个组件为引导性组件（本案例中的AppComponent）。
    // 当Angular引导应用时，它会在DOM中渲染这个引导性组件，并把结果放进index.html的该组件的元素标签中（本案例中的app-root）
    bootstrap: [AppComponent]
})
export class AppModule { }
