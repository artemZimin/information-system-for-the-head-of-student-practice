<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Faculty>
 */
class FacultyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'faculty_number' => fake()->unique()->numberBetween(1, 1000),
            'name' => fake()->company(),
            'dean_name' => fake()->name(),
            'dean_phone_number' => fake()->phoneNumber(),
            'zup_name' => fake()->name(),
            'zup_phone_number' => fake()->phoneNumber(),
        ];
    }
}
