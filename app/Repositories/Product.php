<?php


namespace App\Repositories;


use App\Exceptions\ValidationException;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use LTools\Repositories\RepositoryAbstract;

class Product extends RepositoryAbstract
{
    public function __construct(\App\Models\Product $product)
    {
        $this->model = $product;
    }

    /**
     * paginate
     * @param array $attributes
     * @param int $perPage
     * @param array $columns
     * @param string $pageName
     * @param int $page
     * @return LengthAwarePaginator
     * @author luffyzhao@vip.126.com
     */
    public function paginate(array $attributes, int $perPage = null, array $columns = ['*'], $pageName = 'page', int $page = null)
    {
        return $this->model->with(['productCustomer'])->where(
            $attributes
        )->paginate($perPage, $columns, $pageName, $page);
    }

    /**
     * @param array $attributes
     * @return bool|\Illuminate\Database\Eloquent\Model
     * @author luffyzhao@vip.126.com
     */
    public function create(array $attributes = [])
    {
        DB::beginTransaction();
        /**
         * @var $model \App\Models\Product
         */
        try{
            $model = $this->model->create($attributes);
            $model->productCustomer()->create($attributes['product_customer']);
            DB::commit();
        }catch (Exception $exception){
            DB::rollBack();
            throw $exception;
        }
        return $model;
    }

    /**
     * 通过主键查找一个模型.
     *
     * @method find
     *
     * @param  int|string $id      主键ID
     * @param array       $columns 获取字段
     *
     * @return \Illuminate\Database\Eloquent\Model
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     *
     * @author luffyzhao@vip.126.com
     */
    public function findWithEdit($id, array $columns = ['*'])
    {
        return $this->model->with(['productCustomer', 'productCustomer.customsHsCode'])->findOrFail($id, $columns);
    }

    /**
     * @param $id
     * @return \App\Models\Product|\App\Models\Product[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|Model
     * @author luffyzhao@vip.126.com
     */
    public function findWithShow($id){
        return $this->model->with(['productCustomer', 'productCustomer.customsHsCode'])->findOrFail($id);
    }

    /**
     * 更新
     * @method update
     *
     * @param       $id
     * @param array $values
     *
     * @return Model | bool
     *
     * @author luffyzhao@vip.126.com
     * @throws \Throwable
     */
    public function update($id, array $values)
    {
        DB::beginTransaction();

        try{
            $model = $this->find($id);
            $model->setUpdateWhere('status', 0);
            if($model->fill($values)->updateWhere($id)){
                $model->productCustomer->fill($values['product_customer'])->saveOrFail();
            }else{
                throw new ValidationException('产品不是草稿状态不能更改。');
            }

            DB::commit();
        }catch (Exception $exception){
            DB::rollBack();
            throw $exception;
        }

        return true;
    }

    /**
     * @param $id
     * @return bool
     * @throws Exception
     * @author luffyzhao@vip.126.com
     */
    public function examine($id){
        DB::beginTransaction();

        try{
            $model = $this->model;
            $model->setUpdateWhere('status', 0);
            $values['status'] = 1;
            if($model->fill($values)->updateWhere($id) === 0){
                throw new ValidationException('产品不是草稿状态不能更改。');
            }

            DB::commit();
        }catch (Exception $exception){
            DB::rollBack();
            throw $exception;
        }

        return true;
    }
}