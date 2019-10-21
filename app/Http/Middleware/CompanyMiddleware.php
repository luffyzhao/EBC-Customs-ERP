<?php


namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CompanyMiddleware
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $request->merge(['company_id' => $request->route('company')]);

        if (auth('api')->user() === null) {
            return $next($request);
        }

        if (auth('api')->user()->company_id == $request->route('company')) {
            $request->route()->forgetParameter('company');
            return $next($request);
        }
        throw new NotFoundHttpException('参数错误,请检查参数！');
    }
}