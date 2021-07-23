<?php

namespace Modules\Budget\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Goal extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'amount',
        'is_finished',
        'owner_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Budget\Database\factories\GoalFactory::new();
    }

    public function savings()
    {
        return $this->hasMany(Saving::class);
    }
}
