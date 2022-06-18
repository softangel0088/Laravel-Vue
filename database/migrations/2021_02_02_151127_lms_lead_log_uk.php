<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class LmsLeadLogUk extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lms_lead_log_uk', function (Blueprint $table) {
            $table->id();
            $table->uuid('lead_id')->nullable();
            $table->string('vendor_id')->nullable();
            $table->json('post_data')->nullable();
            $table->text('post_response')->nullable();
            $table->float('post_time')->nullable();
            $table->integer('post_status')->nullable();
//            $table->longText('reason')->nullable();
            $table->timestamps();

//            $table->foreign('vendor_id')
//                ->references('id')
//                ->on('partners')
//            ;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
