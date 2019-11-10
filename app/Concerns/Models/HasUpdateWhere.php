<?php


namespace App\Concerns\Models;


use Illuminate\Database\Eloquent\Model;

trait HasUpdateWhere
{
    protected $updateWhere = [];

    /**
     * @param $key
     * @param $value
     * @return Model
     * @author luffyzhao@vip.126.com
     */
    public function setUpdateWhere($key, $value): Model
    {
        $this->updateWhere[$key] = $value;
        return $this;
    }

    /**
     * @param $id
     * @return mixed
     * @author luffyzhao@vip.126.com
     */
    public function updateWhere($id) : int
    {

        return $this->getConnection()->transaction(function ()use($id) {
            $query = $this->newModelQuery();

            $this->setAttribute($this->getKeyName(), $id);

            if ($this->usesTimestamps()) {
                $this->updateTimestamps();
            }

            $dirty = $this->getDirty();

            $result = 0;
            if (count($dirty) > 0) {
                $result = $this->setKeysForSaveQuery($query)->update($dirty);
            }

            return $result;
        });
    }
}