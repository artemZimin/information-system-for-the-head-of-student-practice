<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = [
        'faculty_number',
        'name',
        'dean_name',
        'dean_phone_number',
        'zup_name',
        'zup_phone_number',
    ];
}
