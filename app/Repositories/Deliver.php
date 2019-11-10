<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class Deliver extends RepositoryAbstract
{
    public function __construct(\App\Models\Deliver $model)
    {
        $this->model = $model;
    }
}