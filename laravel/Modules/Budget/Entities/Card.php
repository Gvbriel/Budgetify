<?php

namespace Modules\Budget\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Card extends Model
{
    use HasFactory;

    protected $table = "card";

    protected $fillable = [
        'name',
        'number',
        'type',
        'balance',
        'owner_id'
    ];

    public function owner()
    {
        return $this->hasOne(User::class, 'id', 'owner_id');
    }
}
