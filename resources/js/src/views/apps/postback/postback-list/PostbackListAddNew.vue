<template>
    <b-sidebar
        id="add-new-postback-sidebar"
        :visible="isAddNewPostbackSidebarActive"
        bg-variant="white"
        sidebar-class="sidebar-lg"
        shadow
        backdrop
        no-header
        right
        @hidden="resetForm"
        @change="(val) => $emit('update:is-add-new-postback-sidebar-active', val)"
    >
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">
                    Add New Postback
                </h5>

                <feather-icon
                    class="ml-1 cursor-pointer"
                    icon="XIcon"
                    size="16"
                    @click="hide"
                />

            </div>

            <!-- BODY -->
            <validation-observer
                #default="{ handleSubmit }"
                ref="refFormObserver"
            >
                <!-- Form -->
                <b-form
                    class="p-2"
                    @submit.prevent="handleSubmit(onSubmit)"
                    @reset.prevent="resetForm"
                >

                    <!--  postback_name -->
                    <validation-provider
                        #default="validationContext"
                        name="postback_name"
                        rules="required"
                    >
                        <b-form-group
                            label="Postback Name"
                            label-for="postback_name"
                        >
                            <b-form-input
                                id="postback_name"
                                v-model="postbackData.postback_name"
                                autofocus
                                :state="getValidationState(validationContext)"
                                trim
                                placeholder="John Doe"
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!--  affiliatePostbackUrl -->
                    <validation-provider
                        #default="validationContext"
                        name="affiliatePostbackUrl"
                        rules="required"
                    >
                        <b-form-group
                            label="Postback URL"
                            label-for="affiliatePostbackUrl"
                        >
                            <b-form-input
                                id="affiliatePostbackUrl"
                                v-model="postbackData.affiliatePostbackUrl"
                                autofocus
                                :state="getValidationState(validationContext)"
                                trim
                                placeholder="JohnDoe007"
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Status -->
                    <validation-provider
                        #default="validationContext"
                        name="Global"
                        rules="required"
                    >
                        <b-form-group
                            label="Global"
                            label-for="global"
                            :state="getValidationState(validationContext)"
                        >
                            <v-select
                                v-model="postbackData.global"
                                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                :options="globalOptions"
                                :clearable="false"
                                input-id="status"
                            />
                            <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>


                    <!-- partner_id -->
                    <validation-provider
                        #default="validationContext"
                        name="Partner ID"
                        rules="required"
                    >
                        <b-form-group
                            label="Partner ID"
                            label-for="partner_id"
                            :state="getValidationState(validationContext)"
                        >
                            <v-select
                                v-model="postbackData.partner_id"
                                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                :options="filterData.vendor_ids"
                                label="vid"
                                :clearable="false"
                                input-id="partner_id"
                            />
                            <b-form-invalid-feedback :state="getValidationState(validationContext)">
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>




                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="mr-2"
                            type="submit"
                        >
                            Add
                        </b-button>
                        <b-button
                            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                            type="button"
                            variant="outline-secondary"
                            @click="hide"
                        >
                            Cancel
                        </b-button>
                    </div>

                </b-form>
            </validation-observer>
        </template>
    </b-sidebar>
</template>

<script>
    import { BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BFormSelect,  } from 'bootstrap-vue'
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import { ref } from '@vue/composition-api'
    import { required, alphaNum, email } from '@validations'
    import formValidation from '@core/comp-functions/forms/form-validation'
    import Ripple from 'vue-ripple-directive'
    import vSelect from 'vue-select'
    import countries from '@/@fake-db/data/other/countries'
    import store from '@/store'

    export default {
        components: {
            BSidebar,
            BForm,
            BFormGroup,
            BFormInput,
            BFormInvalidFeedback,
            BButton,
            vSelect,
            BFormSelect,

            // Form Validation
            ValidationProvider,
            ValidationObserver,
        },
        directives: {
            Ripple,
        },
        model: {
            prop: 'isAddNewPostbackSidebarActive',
            event: 'update:is-add-new-postback-sidebar-active',
        },
        props: {
            isAddNewPostbackSidebarActive: {
                type: Boolean,
                required: true,
            },
            filterData: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                required,
                alphaNum,
                email,
                countries,
            }
        },
        setup(props, { emit }) {
            const blankPostbackData = {
                postback_name: '',
                partner_id: '',
                global: '',
                affiliatePostbackUrl: '',
                status: '',
            }

            const postbackData = ref(JSON.parse(JSON.stringify(blankPostbackData)))
            const resetpostbackData = () => {
                postbackData.value = JSON.parse(JSON.stringify(blankPostbackData))
            }
            const onSubmit = () => {
                store.dispatch('app-postback/addPostback', postbackData.value).then(() => {
                    emit('refetch-data')
                    emit('update:is-add-new-postback-sidebar-active', false)
                })
            }

            const globalOptions = [
                { label: 'Active', value: 1 },
                { label: 'Inactive', value: 0 },
            ]

            const statusOptions = [
                { label: 'Active', value: 1 },
                { label: 'Inactive', value: 0 },
            ]



            const { refFormObserver, getValidationState, resetForm } = formValidation(resetpostbackData)

            return {
                postbackData,
                onSubmit,

                refFormObserver,
                getValidationState,
                resetForm,

                statusOptions,
                globalOptions,
            }
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-select.scss';

    #add-new-postback-sidebar {
        .vs__dropdown-menu {
            max-height: 200px !important;
        }
    }
</style>
