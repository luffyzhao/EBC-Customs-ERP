<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Exception $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Exception $exception
     * @return \Illuminate\Http\Response|\Symfony\Component\HttpFoundation\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof ValidationException) {
            return $request->expectsJson()
                ? $this->myInvalidJson($request, $exception)
                : $this->prepareResponse($request, $exception);
        } else {
            return parent::render($request, $exception);
        }
    }

    /**
     * @param Illuminate\Http\Request $request
     * @param ValidationException $exception
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    protected function myInvalidJson($request, ValidationException $exception)
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], $exception->getCode());
    }
}
