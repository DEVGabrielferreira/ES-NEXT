<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquente\Model;

class Event extends Model {
  use HasFactory;

  protected $fillable = [
    'artist',
    'local',
    'data',
    'cache',
  ];
}