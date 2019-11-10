<?php


namespace App\Http\Controllers\System;


use App\Repositories\CompanyWarehouse;
use App\Repositories\Warehouse;
use LAuth\Http\Controllers\Controller;

class WarehouseController extends Controller
{
    /**
     * @var Warehouse
     * @author luffyzhao@vip.126.com
     */
    private $companyWarehouse;

    public function __construct(CompanyWarehouse $companyWarehouse)
    {
        $this->companyWarehouse = $companyWarehouse;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(){
        return $this->response(
            $this->companyWarehouse->paginate([])
        );
    }
}