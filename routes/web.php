<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/user', [UserController::class, 'index']);

//Route::get('/user/{id}', function (string $id) {
//    return 'User '.$id;
//});

Route::get('/users/{user}', [UserController::class, 'show']);

// Route::get('/products', [ProductController::class, 'Index']);
// Route::get('/products/{id}', [ProductController::class, 'show']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () { // กำหนด middleware ให้กับกลุ่มเส้นทาง
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/products', [ProductController::class, 'Index'])->name('products.index');// สร้างเส้นทางไปยังหน้า index โดยผ่าน การlogin และ การยืนยันตัวตน
    Route::get('/products/{id}', [ProductController::class, 'Show'])->name('products.show');
});

require __DIR__.'/auth.php';
