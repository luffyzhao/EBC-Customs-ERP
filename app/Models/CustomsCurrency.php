<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomsCurrency extends Model
{
    protected $primaryKey = 'code';

    protected $keyType = 'string';
}
