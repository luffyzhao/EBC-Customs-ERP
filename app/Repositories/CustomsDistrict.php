<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CustomsDistrict extends RepositoryAbstract
{
    public function __construct(\App\Models\CustomsDistrict $model)
    {
        $this->model = $model;
    }
}