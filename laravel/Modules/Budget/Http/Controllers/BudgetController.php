<?php

namespace Modules\Budget\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Budget\Entities\Budget;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Support\Renderable;
use Modules\Budget\Transformers\BudgetResource;
use Modules\Budget\Http\Requests\StoreBudgetRequest;
use Modules\Budget\Http\Requests\UpdateBudgetRequest;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $budget = BudgetResource::collection(Budget::all());

        return response()->json($budget);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('budget::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(StoreBudgetRequest $request)
    {
        //$card = Auth::user()->cards;
        $budget = Budget::create([
            'amount' => $request->amount,
            'title' => $request->title,
            'date' => Carbon::parse($request->date)->toDateTimeString(),
            'description' => $request->description,
            'type' => $request->type,
            'is_recurring' => $request->is_recurring,
            'user_id' => Auth::user()->id,
            'card_id' => 1
        ]);

        return response()->json($budget);
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('budget::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(UpdateBudgetRequest $request, $id)
    {

        $budget = Budget::find($id);
        $budget->amount = $request->amount;
        $budget->title = $request->title;
        $budget->date = $request->date;
        $budget->description = $request->description;
        $budget->type = $request->type;
        $budget->is_recurring = $request->is_recurring;
        $budget->user_id = $request->user_id;
        $budget->card_id = $request->card_id;
        $budget->save();

        return response()->json($budget);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
