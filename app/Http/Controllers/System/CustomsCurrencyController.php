<?php


namespace App\Http\Controllers\System;


use App\Http\Searchs\System\CustomsSearch;
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
     * @param CustomsSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(CustomsSearch $search)
    {
        return $this->response(
            $this->currency->paginate($search->toArray())
        );
    }
}