import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component';

// @NgModule装饰器用来为模块定义元数据,将AppModule标记为 Angular 模块类（也叫NgModule类）
@NgModule({
  // declarations列出了应用中的顶层组件
  // 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  // 本模块声明的组件模板需要的类所在的其它模块
  imports: [
    // BrowserModule提供了运行在浏览器中的应用所需要的关键服务（Service）和指令（Directive）
    // 这个模块所有需要在浏览器中跑的应用都必须引用
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing
  ],
  // 服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  // providers列出会在此模块中“注入”的服务（Service）
  // provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。
  // useClass指明这个名称对应的服务是一个类，本例中就是AuthService
  providers: [{ provide: 'auth', useClass: AuthService }],
  // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
  // bootstrap指明哪个组件为引导性组件（本案例中的AppComponent）。
  // 当Angular引导应用时，它会在DOM中渲染这个引导性组件，并把结果放进index.html的该组件的元素标签中（本案例中的app-root）
  bootstrap: [AppComponent]
  // declarations 的子集，可用于其它模块的组件模板
  // AppComponent的export语句只是用于演示如何导出的，它在这个例子中并不是必须的。
  // 根模块不需要导出任何东西，因为其它组件不需要导入根模块
  // exports:      [ AppComponent ]
})
export class AppModule { }
