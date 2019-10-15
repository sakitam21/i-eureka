import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //路由起点
  {
  	path: '',
  	redirectTo: '/login', //重定向到登录页面
  	pathMatch: 'full'
  },
  //当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
