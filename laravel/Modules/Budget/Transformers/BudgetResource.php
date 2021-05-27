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
            'is_recurring' => $this->isRecurring,
            'amount' => $this->amount,
            'type' => ucfirst($this->type),
            'date' => $this->date,
            'created_at' => $this->created_at->format('d-m-Y H:i:s'),
            'updated_at' => $this->updated_at->format('d-m-Y H:i:s'),
        ];
    }
}
