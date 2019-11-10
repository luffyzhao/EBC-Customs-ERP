<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CustomsCountry extends RepositoryAbstract
{
    public function __construct(\App\Models\CustomsCountry $model)
    {
        $this->model = $model;
    }
}