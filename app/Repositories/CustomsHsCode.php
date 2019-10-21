<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CustomsHsCode extends RepositoryAbstract
{
    public function __construct(\App\Models\CustomsHsCode $model)
    {
        $this->model = $model;
    }
}