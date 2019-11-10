<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomsCountry extends Model
{
    protected $primaryKey = 'code';

    protected $keyType = 'string';
}
