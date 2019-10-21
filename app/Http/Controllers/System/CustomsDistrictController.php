<?php


namespace App\Http\Controllers\System;


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
     * @author luffyzhao@vip.126.com
     */
    public function index()
    {
        return $this->response(
            $this->district->paginate([])
        );
    }
}