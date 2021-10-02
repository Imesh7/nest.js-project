import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(): any{
        return [{id:5,}]
    }

    @Get(':id')
    getUserById(@Param("id") id:String){
        return {
            id:Number(id)
        }
    }

}
