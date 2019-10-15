<?php


namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;

class CompanyMiddleware
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $request->merge(['company_id' => $request->route('company')]);
        return $next($request);
    }
}