<?php

namespace App\Models;

use App\Models\Traits\ModelTree;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory, ModelTree;

    protected $table = 'admin_menu';
}
