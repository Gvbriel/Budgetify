<?php

namespace Modules\Budget\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Budget extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'date',
        'type',
        'description',
        'title',
        'is_recurring',
        'user_id'
    ];

    public function card()
    {
        return $this->hasOne(Card::class, 'id', 'card_id');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}