<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    private function validateLogin($password, $hashed){
        return Hash::check($password, $hashed) 
            ? response()->json('Te has logueado con éxito', 200) 
            : response()->json('La contraseña no es válida', 401);
    }

    public function loginSubmit(Request $request){
        $user = User::firstWhere('name', $request->name);
        if($user !== null){
            return $this->validateLogin($request->password, $user->password);
        }
        return response()->json('El usuario no existe', 404);
    }
}
