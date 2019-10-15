import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { LoginService } from '../login.service'; //登录服务注入

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ LoginService ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  model = new User('root','password');
  submmited = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getUsers();
  }

  //初始化用户数据
  getUsers(){
    this.loginService.getUsers().subscribe(
      data => {

        /*this.users = [...data];*/
        this.users = [...data[Symbol.iterator]()];

        /*
        data.forEach((item,index)=>{
          this.users[index]=item;
        })
        */

        console.log(data);
        console.log(this.users);
      }
    );

  }

  //提交登录验证请求
  onSubmit(){
    this.users.forEach(item=>{
      if(item.username==this.model.username&&item.password==this.model.password){
        this.submmited = true;
      }
    })

    if(this.submmited){
      alert("登录成功！");
      this.submmited=false;
    }else{
      alert("登录失败！");
    }
  }

}
