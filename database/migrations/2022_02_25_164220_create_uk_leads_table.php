<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUkLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *database/migrations/2022_02_25_164220_create_uk_leads_table.php
     * @return void
     */
    public function up()
    {
        Schema::create('uk_leads', function (Blueprint $table) {
            $table->id();
//            $table->uuid('id')->primary;
//                $table->uuid('id')->primary();
            $table->uuid('lead_id')->unique();
            $table->unsignedBigInteger('source_id')->nullable();
            $table->unsignedBigInteger('loan_id')->nullable();
            $table->unsignedBigInteger('applicant_id')->nullable();
            $table->unsignedBigInteger('residence_id')->nullable();
            $table->unsignedBigInteger('employer_id')->nullable();
            $table->unsignedBigInteger('expense_id')->nullable();
            $table->unsignedBigInteger('bank_id')->nullable();
            $table->unsignedBigInteger('consent_id')->nullable();
            $table->unsignedBigInteger('additional_id')->nullable();
//
            $table->char('transaction_id')->nullable();
            $table->string('vid')->nullable();
            $table->char('subid', 255)->nullable();
            $table->integer('oid')->nullable();
            $table->integer('tier')->nullable();
            $table->decimal('minCommissionAmount')->nullable();
            $table->decimal('maxCommissionAmount')->nullable();
            $table->integer('timeout')->nullable();
            $table->boolean('istest')->nullable();
            $table->string('response_type')->nullable();
            $table->string('reason')->nullable();
            $table->string('quote_boost')->nullable();


            $table->integer('buyerid')->nullable();
            $table->string('buyerTierID')->nullable();
            $table->float('vidLeadPrice')->nullable();
            $table->float('buyerLeadPrice')->nullable();
            $table->tinyInteger('leadStatus')->default(3)->comment('1=accepted,2=rejected,3=pending');
            $table->char('model_type')->comment('1=CPA, 2=CPF 3=Hybrid 4= ')->nullable();
            $table->integer('quality_score')->nullable();

            $table->tinyInteger('isRedirected')->nullable();
            $table->char('redirectUrl', 255)->nullable();

            $table->foreign('source_id')->references('id')->on('sources')->onDelete('cascade');
            $table->foreign('loan_id')->references('id')->on('loans')->onDelete('cascade');
            $table->foreign('applicant_id')->references('id')->on('applicants')->onDelete('cascade');
            $table->foreign('residence_id')->references('id')->on('residences')->onDelete('cascade');
            $table->foreign('employer_id')->references('id')->on('employers')->onDelete('cascade');
            $table->foreign('expense_id')->references('id')->on('expenses')->onDelete('cascade');
            $table->foreign('bank_id')->references('id')->on('banks')->onDelete('cascade');
            $table->foreign('consent_id')->references('id')->on('consents')->onDelete('cascade');
            $table->foreign('additional_id')->references('id')->on('additionals')->onDelete('cascade');

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
        Schema::dropIfExists('uk_leads');
    }
}
