<?php

namespace Modules\Budget\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBudgetRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'amount' => ['required'],
            'title' => ['required'],
            'date' => ['required'],
            'description' => ['required', 'string', 'max:256'],
            'type' => ['required'],
            'is_recurring' => ['required'],
            'card_id' => ['required'],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
