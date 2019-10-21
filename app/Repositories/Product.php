<?php


namespace App\Repositories;


use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use LTools\Repositories\RepositoryAbstract;

class Product extends RepositoryAbstract
{
    public function __construct(\App\Models\Product $product)
    {
        $this->model = $product;
    }

    /**
     * paginate
     * @param array $attributes
     * @param int $perPage
     * @param array $columns
     * @param string $pageName
     * @param int $page
     * @return LengthAwarePaginator
     * @author luffyzhao@vip.126.com
     */
    public function paginate(array $attributes, int $perPage = null, array $columns = ['*'], $pageName = 'page', int $page = null)
    {
        return $this->model->with(['product_customer'])->where(
            $attributes
        )->paginate($perPage, $columns, $pageName, $page);
    }
}