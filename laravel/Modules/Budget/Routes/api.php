<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Budget\Http\Controllers\BudgetController;
use Modules\Budget\Http\Controllers\CardController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/budget', function (){
    $x = [1,2,3,5];
    return response()->json($x);
});

Route::group(['middleware' => ['cors', 'json.response']], function () {

});
Route::middleware('auth:api')->get('/authorized',function (){
    dd('Authorized!');
});



Route::namespace('\\')->middleware('auth:api')->group(function(){
    Route::resource('budget', BudgetController::class);
    Route::resource('card', CardController::class);
});
