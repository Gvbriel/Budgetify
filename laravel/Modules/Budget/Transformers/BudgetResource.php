<?php

namespace Modules\Budget\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class BudgetResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => ucfirst($this->title),
            'description' => $this->description,
            'is_recurring' => $this->is_recurring,
            'amount' => $this->amount,
            'type' => ucfirst($this->type),
            'date' => $this->date,
            'card' => $this->card ? new CardResource($this->card) : 0,
            'card_id' => $this->card_id,
            'created_at' => $this->created_at->format('d-m-Y H:i:s'),
            'updated_at' => $this->updated_at->format('d-m-Y H:i:s'),
        ];
    }
}
