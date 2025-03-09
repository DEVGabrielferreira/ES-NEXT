<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function store(Request $request)
    {
        // Validação dos dados recebidos
        $validated = $request->validate([
            'local' => 'required|string|max:255',  // Alterei para 'local', que é o campo correto no seu formulário
            'data' => 'required|date',  // Alterei para 'data', conforme o nome no formulário
            'cache' => 'required|numeric', 
            'artist' => 'required|string|max:255',
        ]);

        // Criando o evento no banco de dados
        $event = Event::create([
            'local' => $validated['local'],  // Salvando no banco com os nomes corretos
            'data' => $validated['data'],
            'cache' => $validated['cache'],
            'artist' => $validated['artist'],
        ]);

        // Retornando a resposta como JSON
        return response()->json($event, 201); // Retorna o evento criado com status 201
    }
}