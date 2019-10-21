<?php


namespace App\Http\Controllers\Product;


use App\Repositories\Product;
use LAuth\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * @var Product
     * @author luffyzhao@vip.126.com
     */
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(){
        return $this->response(
            $this->product->paginate([])
        );
    }
}