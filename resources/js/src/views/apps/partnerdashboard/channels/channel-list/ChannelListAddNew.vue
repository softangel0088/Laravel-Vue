<template>
    <b-sidebar
        id="add-new-postback-sidebar"
        :visible="isAddNewChannelSidebarActive"
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
                    Add New Channel
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


                    <!-- Channel Name -->
                    <validation-provider
                        #default="validationContext"
                        name="Channel Name"
                    >
                        <b-form-group
                            label="Channel Name"
                            label-for="postback_name"
                        >
                            <b-form-input
                                id="postback_name"
                                v-model="channelData.postback_name"
                                :state="getValidationState(validationContext)"
                                trim
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Channel Url -->
                    <validation-provider
                        #default="validationContext"
                        name="Channel Url"
                    >
                        <b-form-group
                            label="Channel Url"
                            label-for="affiliateChannelUrl"
                        >
                            <b-form-input
                                id="affiliateChannelUrl"
                                v-model="channelData.affiliateChannelUrl"
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
                                v-model="channelData.global"
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
            prop: 'isAddNewChannelSidebarActive',
            event: 'update:is-add-new-postback-sidebar-active',
        },
        props: {
            isAddNewChannelSidebarActive: {
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

            const newChannelData = {
                user_id: userData.id,
                postback_name: '',
                global: '',
                affiliateChannelUrl: '',
            }

            const statusOptions = [
                { label: 'Active', value: 1 },
                { label: 'Inactive', value: 0 },
            ]


            const channelData = ref(JSON.parse(JSON.stringify(newChannelData)))
            const resetchannelData = () => {
                channelData.value = JSON.parse(JSON.stringify(newChannelData))
            }

            const onSubmit = () => {
                store.dispatch('apps-partner-postback/addChannel', channelData.value).then(() => {
                    emit('refetch-data')
                    emit('update:is-add-new-postback-sidebar-active', false)
                })
            }

            const { refFormObserver, getValidationState, resetForm } = formValidation(resetchannelData)

            return {
                channelData,
                onSubmit,

                refFormObserver,
                getValidationState,
                resetForm,
                statusOptions,
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
