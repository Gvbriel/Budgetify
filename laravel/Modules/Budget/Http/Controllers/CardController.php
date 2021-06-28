<?php

namespace Modules\Budget\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Budget\Entities\Card;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Support\Renderable;
use Modules\Budget\Entities\Image;
use Modules\Budget\Transformers\CardResource;


class CardController extends Controller
{
    public function getImages()
    {
        $images = Image::all();

        return response()->json($images);
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $cards = CardResource::collection(Card::where('owner_id', Auth::user()->id)->get());
            return response()->json($cards);
        } catch (\Illuminate\Database\QueryException $ex) {
            return $ex->getMessage();
        }
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
    public function store(Request $request)
    {
        $card = Card::create([
            'name' => $request->name,
            'number' => $request->number,
            'type' => $request->type,
            'balance' => $request->balance,
            'owner_id' => Auth::user()->id,
        ]);

        return response()->json($card);
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
        return view('budget::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        $card = Card::find($id);
        $card->update($request);
        $card->save();

        return response()->json($card);
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
