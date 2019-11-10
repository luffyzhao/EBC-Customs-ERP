<?php


namespace App\Repositories;


use LTools\Repositories\RepositoryAbstract;

class CompanyWarehouse extends RepositoryAbstract
{
    public function __construct(\App\Models\CompanyWarehouse $model)
    {
        $this->model = $model;
    }

    public function paginate(array $attributes, int $perPage = null, array $columns = ['*'], $pageName = 'page', int $page = null)
    {
        return $this->model->with(['warehouse', 'deliver'])->where(
            $attributes
        )->paginate($perPage, $columns, $pageName, $page);
    }
}