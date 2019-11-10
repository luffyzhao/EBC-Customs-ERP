<?php


namespace App\Http\Controllers\System;


use App\Http\Searchs\System\CustomsSearch;
use LAuth\Http\Controllers\Controller;

class CustomsDistrictController extends Controller
{
    /**
     * @var \App\Repositories\CustomsDistrict
     */
    private $district;

    public function __construct(\App\Repositories\CustomsDistrict $district)
    {
        $this->district = $district;
    }

    /**
     * @param CustomsSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(CustomsSearch $search)
    {
        return $this->response(
            $this->district->paginate($search->toArray())
        );
    }
}