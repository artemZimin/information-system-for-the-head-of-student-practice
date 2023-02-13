<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faculties', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('faculty_number')->unique();
            $table->string('name', 50);
            $table->string('dean_name', 50);
            $table->string('dean_phone_number', 20);
            $table->string('zup_name', 50);
            $table->string('zup_phone_number', 20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('faculties');
    }
};
