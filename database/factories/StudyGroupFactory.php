<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudyGroup>
 */
class StudyGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name_headman' => fake()->name(),
            'phone_number_headman' => fake()->phoneNumber(),
            'course' => fake()->numberBetween(1, 4)
        ];
    }
}
