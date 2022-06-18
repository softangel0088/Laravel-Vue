<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLmsleadlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lmsleadlogs', function (Blueprint $table) {
            $table->id();
            $table->uuid('lead_id')->nullable();
            $table->string('vendor_id' )->nullable();
            $table->integer('buyer_id')->nullable();
            $table->integer('buyer_setup_id')->nullable();
            $table->float('post_price');
            $table->char( 'post_url');
            $table->json('post_data');
            $table->json('post_response');
            $table->tinyInteger('post_status');
            $table->float('post_time')->nullable();
            $table->enum('isredirected', ['0', '1'])->default('0');
            $table->char( 'lender_found')->nullable();
            $table->longText('reason')->nullable();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lmsleadlogs');
    }
}
