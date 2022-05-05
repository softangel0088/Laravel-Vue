<template>
    <b-sidebar
        id="edit-new-postback-sidebar"
        :visible="isEditNewPostbackSidebarActive"
        bg-variant="white"
        sidebar-class="sidebar-lg"
        shadow
        backdrop
        no-header
        right
        @hidden="resetForm"
        @change="(val) => $emit('update:is-edit-new-postback-sidebar-active', val)"
    >
        <template #default="{ hide }">
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                <h5 class="mb-0">
                    Edit Postback
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


                    <!-- Postback Name -->
                    <validation-provider
                        #default="validationContext"
                        name="Postback Name"
                    >
                        <b-form-group
                            label="Postback Name"
                            label-for="postback_name"
                        >
                            <b-form-input
                                id="postback_name"
                                v-model="postbackData.postback_name"
                                :state="getValidationState(validationContext)"
                                trim
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Postback Url -->
                    <validation-provider
                        #default="validationContext"
                        name="Postback Url"
                    >
                        <b-form-group
                            label="Postback Url"
                            label-for="affiliatePostbackUrl"
                        >
                            <b-form-input
                                id="affiliatePostbackUrl"
                                v-model="postbackData.affiliatePostbackUrl"
                                :state="getValidationState(validationContext)"
                                trim
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>



                    <!--  GLOBAL -->
                    <validation-provider
                        #default="validationContext"
                        name="User Role"
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
                                :options="statusOptions"
                                :reduce="val => val.value"
                                :clearable="false"
                                input-id="global"
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
                            Update
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
    import { BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton } from 'bootstrap-vue'
    import { ValidationProvider, ValidationObserver } from 'vee-validate'
    import { required, alphaNum, email } from '@validations'
    import formValidation from '@core/comp-functions/forms/form-validation'
    import { ref } from '@vue/composition-api'
    import Ripple from 'vue-ripple-directive'
    import vSelect from 'vue-select'
    import countries from '@/@fake-db/data/other/countries'
    import store from '@/store'
    import {getUserData} from '@/auth/utils'

    export default {
        components: {
            BSidebar,
            BForm,
            BFormGroup,
            BFormInput,
            BFormInvalidFeedback,
            BButton,
            vSelect,

            // Form Validation
            ValidationProvider,
            ValidationObserver,
        },
        directives: {
            Ripple,
        },
        model: {
            prop: 'isEditNewPostbackSidebarActive',
            event: 'update:is-edit-new-postback-sidebar-active',
        },
        props: {
            isEditNewPostbackSidebarActive: {
                type: Boolean,
                required: true,
            },
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
            const userData = getUserData()


            const newPostbackData = {
                postback_id: userData.id,
                user_id: userData.id,
                postback_name: '',
                global: '',
                affiliatePostbackUrl: '',
            }
            const partnerOptions = [
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
            ]
            const statusOptions = [
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
            ]


            const postbackData = ref(JSON.parse(JSON.stringify(newPostbackData)))
            const resetpostbackData = () => {
                postbackData.value = JSON.parse(JSON.stringify(newPostbackData))
            }

            const onSubmit = () => {
                store.dispatch('apps-partner-postback/updatePostback', postbackData.value).then(() => {
                    emit('refetch-data')
                    emit('update:is-edit-new-postback-sidebar-active', false)
                })
            }

            const { refFormObserver, getValidationState, resetForm } = formValidation(resetpostbackData)

            return {
                postbackData,
                onSubmit,

                refFormObserver,
                getValidationState,
                resetForm,
                partnerOptions,
                statusOptions,
            }
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-select.scss';

    #edit-new-postback-sidebar {
        .vs__dropdown-menu {
            max-height: 200px !important;
        }
    }
</style>
