<template>
    <b-tabs
            vertical
            content-class="col-12 col-md-9 mt-1 mt-md-0"
            pills
            nav-wrapper-class="col-md-3 col-12"
            nav-class="nav-left"
    >

        <!-- general tab -->
        <b-tab active>

            <!-- title -->
            <template #title>
                <feather-icon
                        icon="UserIcon"
                        size="18"
                        class="mr-50"
                />
                <span class="font-weight-bold">General</span>
            </template>

            <account-setting-general
                    :user-data="userData"
            />
        </b-tab>
        <!--/ general tab -->

        <!--        &lt;!&ndash; change password tab &ndash;&gt;-->
        <!--        <b-tab>-->

        <!--            &lt;!&ndash; title &ndash;&gt;-->
        <!--            <template #title>-->
        <!--                <feather-icon-->
        <!--                    icon="LockIcon"-->
        <!--                    size="18"-->
        <!--                    class="mr-50"-->
        <!--                />-->
        <!--                <span class="font-weight-bold">Change Password</span>-->
        <!--            </template>-->

        <!--            <account-setting-password-->
        <!--                :user-data="userData"/>-->
        <!--        </b-tab>-->
        <!--/ change password tab -->

        <!-- info -->
        <b-tab>

            <!-- title -->
            <template #title>
                <feather-icon
                        icon="InfoIcon"
                        size="18"
                        class="mr-50"
                />
                <span class="font-weight-bold">Company</span>
            </template>

            <account-setting-information
                    :user-data="userData"
            />
        </b-tab>

        <b-tab>
            <!-- Referral Link -->
            <template #title>
                <feather-icon
                        icon="LinkIcon"
                        size="18"
                        class="mr-50"
                />
                <span class="font-weight-bold">Referral Link</span>
            </template>

            <account-referral-link
                    :user-data="userData"
            />
        </b-tab>

    </b-tabs>
</template>

<script>
    import {BTabs, BTab} from 'bootstrap-vue'
    import AccountSettingGeneral from './AccountSettingGeneral.vue'
    import AccountSettingPassword from './AccountSettingPassword.vue'
    import AccountSettingInformation from './AccountSettingInformation.vue'
    import AccountSettingNotification from './AccountSettingNotification.vue'
    import AccountReferralLink from './AccountReferralLink.vue'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
    import {getUserData} from "@/auth/utils";
    import axios from 'axios'
    import {ref} from '@vue/composition-api'

    export default {
        components: {
            BTabs,
            BTab,
            AccountSettingGeneral,
            AccountSettingPassword,
            AccountSettingInformation,
            AccountSettingNotification,
            AccountReferralLink,
            ToastificationContent,
        },

        setup() {
            const user = getUserData()
            const userData = ref({})
            axios.get(`/api/partner/getUserData/${user.id}`).then(res => {
                userData.value = res.data
            })

            return {
                userData
            }
        },
    }
</script>
