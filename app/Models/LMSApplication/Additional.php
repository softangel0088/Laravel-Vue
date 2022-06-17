<?php

namespace App\Models\LMSApplication;

use App\Models\Lead\UKLead;
use App\Models\Lead\USLead;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Additional extends Model
{
    use HasFactory;


    public function us_lead()
    {
        return $this->hasOne(USLead::class, 'id');
    }
    public function uk_lead()
    {
        return $this->hasOne(UKLead::class, 'id');
    }
    public function source()
    {
        return $this->hasOne(Source::class, 'id');
    }

}
