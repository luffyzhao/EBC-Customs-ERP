<?php


namespace App\Http\Searchs\Product;


use LTools\Searchs\SearchAbstract;

class IndexSearch extends SearchAbstract
{

    /**
     * 关系映射.
     *
     * @return array
     */
    protected function relationship(): array
    {
        return [
            'sku' => '=',
            'barcode' => '=',
            'brand' => '=',
            'name' => 'like',
        ];
    }
}