<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CustomsUnit extends RepositoryAbstract
{
    public function __construct(\App\Models\CustomsUnit $model)
    {
        $this->model = $model;
    }
}