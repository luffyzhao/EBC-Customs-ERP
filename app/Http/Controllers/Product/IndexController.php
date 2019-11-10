<?php


namespace App\Http\Controllers\Product;


use App\Http\Requests\Product\StoreRequest;
use App\Http\Requests\Product\UpdateRequest;
use App\Http\Searchs\Product\IndexSearch;
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
     * @param IndexSearch $search
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function index(IndexSearch $search){
        return $this->response(
            $this->product->paginate($search->toArray())
        );
    }

    /**
     * @param StoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     * @author: luffyzhao@vip.126.com
     * @datetime: 2019/3/28 13:27
     */
    public function store(StoreRequest $request)
    {
        return $this->response(
            $this->product->create(
                $request->only([
                    'name', 'sku', 'barcode', 'brand', 'weight', 'net_weight', 'product_customer'
                ])
            )
        );
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function edit($id){
        return $this->response([
            'row' => $this->product->findWithEdit($id)
        ]);
    }

    /**
     * @param UpdateRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     * @author luffyzhao@vip.126.com
     */
    public function update(UpdateRequest $request, $id){
        return $this->response(
            $this->product->update(
                $id,
                $request->only([
                    'name', 'sku', 'barcode', 'brand', 'weight', 'net_weight', 'product_customer'
                ])
            )
        );
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @author luffyzhao@vip.126.com
     */
    public function show($id){
        return $this->response([
            'row' => $this->product->findWithShow($id)
        ]);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     * @author luffyzhao@vip.126.com
     */
    public function examine($id){
        return $this->response(
            $this->product->examine($id)
        );
    }
}