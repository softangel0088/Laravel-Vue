<template>
    <div class="auth-wrapper auth-v1 px-2">
        <div class="auth-inner py-2">

            <!-- Register v1 -->
            <b-card class="mb-0 ">
                <b-link class="brand-logo">
                    <b-img
                        :src="logoUrl"
                        alt="Login V2"
                        class="z-index-0"
                        width="150"
                        height="45"
                    />
                </b-link>

                <b-card-title class="mb-1">
                    Join Network
                </b-card-title>
                <b-card-text class="mb-2">
                    Create your account! 🚀
                </b-card-text>

                <!-- form -->
                <validation-observer ref="registerForm">
                    <b-form
                        class="auth-register-form mt-2"
                        @submit.prevent="register"
                    >
                        <!-- username -->
                        <b-form-group
                            label="Username"
                            label-for="username"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Username"
                                rules="required"
                            >
                                <b-form-input
                                    id="username"
                                    v-model="username"
                                    :state="errors.length > 0 ? false:null"
                                    name="username"
                                    placeholder="johndoe"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- name -->
                        <b-form-group
                            label="Name"
                            label-for="name"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Username"
                                rules="required"
                            >
                                <b-form-input
                                    id="name"
                                    v-model="name"
                                    :state="errors.length > 0 ? false:null"
                                    name="name"
                                    placeholder="John Doe"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- email -->
                        <b-form-group
                            label="Email"
                            label-for="email"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Email"
                                rules="required|email"
                            >
                                <b-form-input
                                    id="email"
                                    v-model="email"
                                    :state="errors.length > 0 ? false:null"
                                    name="email"
                                    placeholder="john@example.com"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password -->
                        <b-form-group
                            label="Password"
                            label-for="password"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="Password"
                                rules="required"
                            >
                                <b-input-group
                                    class="input-group-merge"
                                    :class="errors.length > 0 ? 'is-invalid':null"
                                >
                                    <b-form-input
                                        id="password"
                                        v-model="password"
                                        :type="passwordFieldType"
                                        :state="errors.length > 0 ? false:null"
                                        class="form-control-merge"
                                        name="register-password"
                                        placeholder="············"
                                    />
                                    <b-input-group-append is-text>
                                        <feather-icon
                                            :icon="passwordToggleIcon"
                                            class="cursor-pointer"
                                            @click="togglePasswordVisibility"
                                        />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password confirm -->
                        <b-form-group
                            label="Confirm Password"
                            label-for="confirmation_password"
                        >
                            <validation-provider
                                #default="{ errors }"
                                name="confirmation_password"
                                rules="required"
                            >
                                <b-input-group
                                    class="input-group-merge"
                                    :class="errors.length > 0 ? 'is-invalid':null"
                                >
                                    <b-form-input
                                        id="confirmation_password"
                                        v-model="confirmation_password"
                                        :type="passwordFieldType"
                                        :state="errors.length > 0 ? false:null"
                                        class="form-control-merge"
                                        name="confirmation_password"
                                        placeholder="············"
                                    />
                                    <b-input-group-append is-text>
                                        <feather-icon
                                            :icon="passwordToggleIcon"
                                            class="cursor-pointer"
                                            @click="togglePasswordVisibility"
                                        />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- checkbox -->
                        <b-form-group>
                            <b-form-checkbox
                                id="register-privacy-policy"
                                v-model="status"
                                name="checkbox-1"
                            >
                                I agree to
                                <b-link>privacy policy & terms</b-link>
                            </b-form-checkbox>
                        </b-form-group>


<!--                        <vue-recaptcha sitekey="6LcgYfYeAAAAAAaEuja4fgIE6lBQQf3fbprXYutV"></vue-recaptcha>-->

                        <!-- submit button -->
                        <b-button
                            variant="primary"
                            block
                            type="submit"
                        >
                            Sign up
                        </b-button>
                    </b-form>
                </validation-observer>

                <b-card-text class="text-center mt-2">
                    <span>Already have an account? </span>
                    <b-link :to="{name:'auth-login'}">
                        <span>Sign in instead</span>
                    </b-link>
                </b-card-text>


            </b-card>
            <!-- /Register v1 -->
        </div>
    </div>

</template>


<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  BCardTitle,
  BCardText,
    BCard
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { VueRecaptcha } from 'vue-recaptcha';


export default {
  components: {
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
      BCard,
    // validations
    ValidationProvider,
    ValidationObserver,
      VueRecaptcha
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      referrer_id: '',
      status: '',
      username: '',
      name: '',
      email: '',
      password: '',
      confirmation_password: '',
        sideImg: require('@/assets/images/pages/flat-bg2.jpg'),
        logoUrl: require('@/assets/images/logo/logo.png'),

        // validation
      required,
      // email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    register() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          useJwt
            .register({
              name: this.name,
              username: this.username,
              email: this.email,
              password: this.password,
              confirmation_password: this.confirmation_password,
              ref: this.$route.query.ref,

                //const urlParams = new URLSearchParams(window.location.search);
                // this.name = urlParams.get("name");
            })
            .then(response => {
              this.$router.push('/login')
                this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                        title: `Account Registered.`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                        text: `Please contact your account manager. Check your inbox.`,
                    },
                })
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                            title: `Error Creating Account::`,
                            icon: 'AlertCircleIcon',
                            variant: 'danger',
                            text: `Please enter valid credentials`,
                        },
                    })
                }
              this.$refs.registerForm.setErrors(error.response.error)
            })
        }
      })
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-auth.scss';
</style>
