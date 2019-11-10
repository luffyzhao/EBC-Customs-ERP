<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class Warehouse extends RepositoryAbstract
{
    public function __construct(\App\Models\Warehouse $model)
    {
        $this->model = $model;
    }
}