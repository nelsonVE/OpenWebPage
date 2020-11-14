<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;

class AuthController extends Controller
{
    public function __construct(){
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|min:6',
            'password' => 'required|string|min:6'
        ]);

        if($validator->fails()){
            return response()->json(["error" => $validator->errors()], 422);
        }

        if(!$token = auth('api')->attempt($validator->validated())){
            return response()->json(['error' => 'El usuario/contraseña es incorrecto'], 401);
        }

        return $this->createNewToken($token);
    }

    public function logout(){
        $auth->logout();
        return response()->json(['message' => 'Has cerrado sesión satisfactoriamente']);
    }

    public function refresh(){
        return $this->createNewToken(auth('api')->refresh());
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth('api')->user()
        ]);
    }
}
