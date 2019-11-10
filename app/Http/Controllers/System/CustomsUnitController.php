<?php


namespace App\Http\Controllers\System;


use App\Http\Searchs\System\CustomsSearch;
use LAuth\Http\Controllers\Controller;

class CustomsUnitController extends Controller
{
    /**
     * @var \App\Repositories\CustomsDistrict
     */
    private $unit;

    public function __construct(\App\Repositories\CustomsUnit $unit)
    {
        $this->unit = $unit;
    }

    /**
     * @param CustomsSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(CustomsSearch $search)
    {
        return $this->response(
            $this->unit->paginate($search->toArray())
        );
    }
}