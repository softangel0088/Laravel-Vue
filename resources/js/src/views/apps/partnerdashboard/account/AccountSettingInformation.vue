<template>
    <b-card>
        <b-form class="mt-1"
                @submit.prevent="updateCompanyInfo"
        >
            <!-- Header: Company Info -->
            <div class="d-flex mt-2">
                <feather-icon
                    icon="MapPinIcon"
                    size="19"
                />
                <h4 class="mb-1 ml-50">
                    Company Details
                </h4>
            </div>

            <b-row>

                <!-- Field: Join Date -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Join Date"
                        label-for="birth-date"
                    >
                        <flat-pickr
                            v-model="userData.user.company.created_at"
                            class="form-control"
                            :config="{ dateFormat: 'd-m-Y'}"
                            placeholder="DD-MM-YYYY"
                            disabled
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Mobile -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Phone"
                        label-for="phone"
                    >
                        <b-form-input
                            id="phone"
                            v-model="userData.user.company.phone"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Website -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Website"
                        label-for="website"
                    >
                        <b-form-input
                            id="website"
                            v-model="userData.user.company.website"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Language -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="IM/Skype"
                        label-for="skype"
                    >
                        <b-form-input
                            id="skype"
                            v-model="userData.user.company.skype"
                        />
                    </b-form-group>
                </b-col>


            </b-row>

            <!-- Header: Company Info -->
            <div class="d-flex mt-2">
                <feather-icon
                    icon="MapPinIcon"
                    size="19"
                />
                <h4 class="mb-0 ml-50">
                    Address
                </h4>
            </div>

            <!-- Form: Company Info Form -->
            <b-row class="mt-1">

                <!-- Field: Address Line 1 -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Address Line 1"
                        label-for="address1"
                    >
                        <b-form-input
                            id="address1"
                            v-model="userData.user.company.address1"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Address Line 2 -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Address Line 2"
                        label-for="address2"
                    >
                        <b-form-input
                            id="address2"
                            v-model="userData.user.company.address2"
                            placeholder="Los Santos"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Postcode -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Postcode"
                        label-for="postcode"
                    >
                        <b-form-input
                            id="postcode"
                            v-model="userData.user.company.postcode"
                            placeholder="597626"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: City -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="City"
                        label-for="city"
                    >
                        <b-form-input
                            id="city"
                            v-model="userData.user.company.city"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: State -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="State"
                        label-for="state"
                    >
                        <b-form-input
                            id="state"
                            v-model="userData.user.company.state"
                            placeholder="Manhattan"
                        />
                    </b-form-group>
                </b-col>

                <!-- Field: Country -->
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                >
                    <b-form-group
                        label="Country"
                        label-for="country"
                    >
                        <b-form-input
                            id="country"
                            v-model="userData.user.company.country"
                            placeholder="United States"
                        />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-2">
                <b-col>
                    <b-button
                        variant="primary"
                        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                        type="submit"
                        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                    >
                        Save Changes
                    </b-button>
                    <b-button
                        variant="outline-primary"
                        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                        @click="goBack"
                    >
                        Back
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </b-card>
</template>

<script>
    import {BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BFormTextarea} from 'bootstrap-vue'
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import Ripple from 'vue-ripple-directive'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

    // eslint-disable-next-line import/no-extraneous-dependencies
    import 'cleave.js/dist/addons/cleave-phone.us'
    import {ref} from "@vue/composition-api";

    export default {
        components: {
            BButton,
            BForm,
            BFormGroup,
            BFormInput,
            BRow,
            BCol,
            BCard,
            BFormTextarea,
            vSelect,
            flatPickr,
            ToastificationContent,
        },
        directives: {
            Ripple,
        },
        props: {
            userData: {
                type: Object,
            },
        },
        setup(props) {

               function goBack() {
                history.back();
            }
            function updateCompanyInfo(ev) {
                ev.preventDefault();

                // loading.value = true;

                this.$http.patch(`/partner/updateCompany/${props.userData.user.id}`, this.userData.user.company)
                    .then((res) => {
                        this.$toast({
                            component: ToastificationContent,
                            props: {
                                title: 'Notification',
                                text: 'Successfully updated company details',
                                variant: 'success'
                            },
                        })
                        // loading.value = false;
                        // router.push({
                        //     name: "Dashboard",
                        // });
                    })
                    .catch((error) => {
                        // loading.value = false;
                        this.$toast({
                            component: ToastificationContent,
                            props: {
                                title: 'Notification',
                                text: 'Error updating company details',
                                variant: 'danger'
                            },
                        })

                        if (error.response.status === 404) {
                            errors.value = error.response.data.errors;
                        }
                    });
            }


            return {
                updateCompanyInfo,
                goBack,
            }
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-select.scss';
    @import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>
