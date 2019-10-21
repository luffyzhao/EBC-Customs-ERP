<?php


namespace App\Http\Controllers\System;



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
     * @author luffyzhao@vip.126.com
     */
    public function index()
    {
        return $this->response(
            $this->hsCode->paginate([])
        );
    }
}