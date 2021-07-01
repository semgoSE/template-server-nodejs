import { Body, Controller, Get, Param, Post } from 'routing-controllers';
import 'reflect-metadata';
import { IsDefined } from 'class-validator';

@Controller()
export class UserController {
    @Post('/users/sign_up')
    sign_up(@Body() sign_in_data: any) {
        return {
            status: "ok1"
        }
    }

    @Post('/user/login')
    login(@Body() login_data: any) {
        console.log(login_data)
        return {
            status: "ok"
        }
    }
}


