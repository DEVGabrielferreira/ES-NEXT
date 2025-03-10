<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition()
    {
        return [
            'local'  => $this->faker->address,
            'data'   => $this->faker->date(),
            'cache'  => $this->faker->randomFloat(2, 100, 10000),
            'artist' => $this->faker->name,
        ];
    }
}