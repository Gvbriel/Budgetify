<?php


namespace Modules\Budget\Transformers;


use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'balance' => $this->calculateBalance(),
            'type' => ucfirst($this->type),
            'image' => $this->image->url,
        ];
    }
}
