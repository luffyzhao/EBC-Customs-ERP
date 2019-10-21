<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CustomsCurrency extends RepositoryAbstract
{
    public function __construct(\App\Models\CustomsCurrency $model)
    {
        $this->model = $model;
    }
}