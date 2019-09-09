<?php


namespace LAuth\Providers;


use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Route;

class LAuthServiceProvider extends RouteServiceProvider
{
    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        parent::map();

        $this->mapLAuthRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapLAuthRoutes()
    {
        Route::prefix('api')
            ->middleware(['api'])
            ->namespace('LAuth\Http\Controllers')
            ->group(__DIR__ . '/../routes.php');
    }
}