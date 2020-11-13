<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    private function validateLogin($password, $hashed){
        return Hash::check($password, $hashed) 
            ? response_utf8('Te has logueado con éxito', 200) 
            : response_utf8('El usuario y/o contraseña no son válidos', 401);
    }

    public function loginSubmit(Request $request){
        $user = User::firstWhere('name', $request->name);
        if($user !== null){
            return $this->validateLogin($request->password, $user->password);
        }
        return response_utf8('El usuario no existe', 404);
    }
}
