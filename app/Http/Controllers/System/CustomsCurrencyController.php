<?php


namespace App\Http\Controllers\System;


use LAuth\Http\Controllers\Controller;

class CustomsCurrencyController extends Controller
{
    /**
     * @var \App\Repositories\CustomsCurrency
     */
    private $currency;

    public function __construct(\App\Repositories\CustomsCurrency $currency)
    {
        $this->currency = $currency;
    }

    /**
     * @author luffyzhao@vip.126.com
     */
    public function index()
    {
        return $this->response(
            $this->currency->paginate([])
        );
    }
}