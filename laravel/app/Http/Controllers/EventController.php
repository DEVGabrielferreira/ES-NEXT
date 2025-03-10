<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'local' => 'required|string|max:255',
            'data' => 'required|date',
            'cache' => 'required|numeric',
            'artist' => 'required|string|max:255',
        ]);


        $event = Event::create([
            'local' => $validated['local'],
            'data' => $validated['data'],
            'cache' => $validated['cache'],
            'artist' => $validated['artist'],
        ]);

       
        return response()->json($event, 201); 
    }

    
    public function index()
    {
        $events = Event::all(); 
        return response()->json($events); 
    }
}