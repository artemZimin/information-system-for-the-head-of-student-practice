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
        Schema::create('study_groups', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name_headman', 50);
            $table->string('phone_number_headman', 20);
            $table->integer('course');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('study_groups');
    }
};
