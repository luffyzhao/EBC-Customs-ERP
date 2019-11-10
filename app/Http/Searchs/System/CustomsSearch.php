<?php


namespace App\Http\Searchs\System;


use LTools\Searchs\SearchAbstract;

class CustomsSearch extends SearchAbstract
{
    /**
     * 关系映射.
     *
     * @return array
     */
    protected function relationship(): array
    {
        return [
            'code' => 'like',
            'name' => 'like'
        ];
    }

    /**
     * @param $code
     * @return string
     * @author luffyzhao@vip.126.com
     */
    protected function getCodeAttribute($code)
    {
        return $code . '%';
    }

    /**
     * @param $name
     * @return string
     * @author luffyzhao@vip.126.com
     */
    protected function getNameAttribute($name)
    {
        return '%'. $name . '%';
    }
}