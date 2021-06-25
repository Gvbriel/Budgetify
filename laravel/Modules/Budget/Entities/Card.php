<?php

namespace Modules\Budget\Entities;

use App\Models\User;
use Modules\Budget\Entities\Budget;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Card extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "cards";

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

    public function calculateBalance()
    {
        $balance = $this->balance;
        $budgets = Budget::where('user_id', $this->owner_id)->get();
        foreach ($budgets as $budget) {
            if ($budget->type == 'Income') {
                $balance += $budget->amount;
            } else {
                $balance -= $budget->amount;
            }
        }
        $this->balance = $balance;
        $this->save();
        return $this->balance;
    }
}
