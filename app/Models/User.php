<?php

namespace App\Models;

use App\Models\Partner\Partner;
use App\Models\User\Company;
use App\Models\User\Payment;
use App\Notifications\PasswordReset;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject, MustVerifyEmail, CanResetPassword
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function partner()
    {
        return $this->hasMany(Partner::class);
    }
    public function company()
    {
        return $this->hasOne(Company::class);
    }
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordReset($token));
    }
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification());
    }

}
