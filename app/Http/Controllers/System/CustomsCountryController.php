<?php


namespace App\Http\Controllers\System;


use App\Http\Searchs\System\CustomsSearch;
use LAuth\Http\Controllers\Controller;

class CustomsCountryController extends Controller
{
    /**
     * @var \App\Repositories\CustomsCurrency
     */
    private $country;

    public function __construct(\App\Repositories\CustomsCountry $country)
    {
        $this->country = $country;
    }

    /**
     * @param CustomsSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(CustomsSearch $search)
    {
        return $this->response(
            $this->country->paginate($search->toArray())
        );
    }
}