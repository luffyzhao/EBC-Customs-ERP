<?php


namespace App\Http\Controllers\System;


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
     * @author luffyzhao@vip.126.com
     */
    public function index()
    {
        return $this->response(
            $this->unit->paginate([])
        );
    }
}