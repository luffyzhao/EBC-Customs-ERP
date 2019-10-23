<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['barcode', 'sku', 'name', 'brand', 'weight', 'net_weight', 'status'];

    protected $updateWhere = [];


    public function productCustomer()
    {
        return $this->hasOne(ProductCustomer::class, 'product_id', 'id');
    }

    /**
     * @param $key
     * @param $value
     * @return Product
     * @author luffyzhao@vip.126.com
     */
    public function setUpdateWhere($key, $value): Product
    {
        $this->updateWhere[$key] = $value;
        return $this;
    }

    /**
     * @author luffyzhao@vip.126.com
     */
    protected function updateTimestamps()
    {
        parent::updateTimestamps();
        $this->setAttribute('company_id', request()->input('company_id'));
    }

    /**
     * @param Builder $query
     * @return Builder|void
     * @author luffyzhao@vip.126.com
     */
    protected function setKeysForSaveQuery(Builder $query)
    {
        parent::setKeysForSaveQuery($query);

        $query->where('company_id', '=', request()->input('company_id'));
        if (!empty($this->updateWhere)) {
            foreach ($this->updateWhere as $key => $item) {
                $query->where($key, '=', $item);
            }
        }

        return $query;
    }

    /**
     * @return mixed
     * @throws \Throwable
     * @author luffyzhao@vip.126.com
     */
    public function updateWhere()
    {
        return $this->getConnection()->transaction(function () {
            $query = $this->newModelQuery();

            $dirty = $this->getDirty();

            $result = 0;
            if (count($dirty) > 0) {
                $result = $this->setKeysForSaveQuery($query)->update($dirty);
            }

            return $result;
        });
    }

    /**
     * Perform a model update operation.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return bool
     */
    protected function performUpdate(Builder $query)
    {
        if ($this->fireModelEvent('updating') === false) {
            return false;
        }

        if ($this->usesTimestamps()) {
            $this->updateTimestamps();
        }

        $dirty = $this->getDirty();
        $result = 0;
        if (count($dirty) > 0) {
            $result = $this->setKeysForSaveQuery($query)->update($dirty);

            $this->syncChanges();

            $this->fireModelEvent('updated', false);
        }

        return $result === 0 ? false : true;
    }
}