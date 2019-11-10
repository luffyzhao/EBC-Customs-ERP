<?php


namespace App\Models;


use App\Concerns\Models\HasUpdateWhere;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasUpdateWhere;

    protected $fillable = ['barcode', 'sku', 'name', 'brand', 'weight', 'net_weight', 'status'];

    public function productCustomer()
    {
        return $this->hasOne(ProductCustomer::class, 'product_id', 'id');
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


}