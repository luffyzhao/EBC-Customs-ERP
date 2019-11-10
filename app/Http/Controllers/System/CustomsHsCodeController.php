<?php


namespace App\Http\Controllers\System;



use App\Http\Searchs\System\CustomsSearch;
use LAuth\Http\Controllers\Controller;

class CustomsHsCodeController extends Controller
{
    /**
     * @var \App\Repositories\CustomsDistrict
     */
    private $hsCode;

    public function __construct(\App\Repositories\CustomsHsCode $hsCode)
    {
        $this->hsCode = $hsCode;
    }

    /**
     * @param CustomsSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(CustomsSearch $search)
    {
        return $this->response(
            $this->hsCode->paginate($search->toArray())
        );
    }
}