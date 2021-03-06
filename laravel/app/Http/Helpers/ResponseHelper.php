<?php

namespace App\Http\Helpers;

class ResponseHelper
{
    public static function getPagination($data)
    {
        return [
            'max' => $data->total(),
            'per_page' => $data->perPage(),
            'current_page' => $data->currentPage(),
            'data' => $data->items(),
        ];
    }
}
