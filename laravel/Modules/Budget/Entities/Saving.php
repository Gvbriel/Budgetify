<?php

namespace Modules\Budget\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Saving extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'amount',
        'goal_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Budget\Database\factories\SavingFactory::new();
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
