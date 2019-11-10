<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class CompanyWarehouse extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author luffyzhao@vip.126.com
     */
    public function warehouse(){
        return $this->belongsTo(Warehouse::class, 'warehouse_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author luffyzhao@vip.126.com
     */
    public function deliver(){
        return $this->belongsTo(Deliver::class, 'deliver_id', 'id');
    }

}