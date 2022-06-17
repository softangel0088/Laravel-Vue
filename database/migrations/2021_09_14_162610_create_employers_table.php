<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employers', function (Blueprint $table) {
            $table->id();
            $table->string('lead_id')->nullable();

            $table->char('employerName')->nullable();
            $table->char('employerPhoneNumber')->nullable();
            $table->char('jobTitle')->nullable();
            $table->char('monthsAtEmployer')->nullable();
            $table->char('employerIndustry')->nullable();
            $table->char('incomeSource')->nullable();
            $table->char('incomeCycle')->nullable();
            $table->integer('monthlyIncome')->nullable();
            $table->integer('combinedMonthlyHouseholdIncome')->nullable();
            $table->integer('nextPayDateDay')->nullable();
            $table->integer('nextPayDateMonth')->nullable();
            $table->integer('nextPayDateYear')->nullable();
            $table->integer('followingPayDateDay')->nullable();
            $table->integer('followingPayDateMonth')->nullable();
            $table->integer('followingPayDateYear')->nullable();
            $table->char('incomePaymentType')->nullable();
            $table->integer('governmentBenefitsAmount')->nullable();
            $table->integer('pensionAmount')->nullable();
            $table->integer('otherIncomeAmount')->nullable();
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
        Schema::dropIfExists('employers');
    }
}
