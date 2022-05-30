<template>
    <div>

        <!-- Alert: No item found -->
        <b-alert
            variant="danger"
            :show="leadData === undefined"
        >
            <h4 class="alert-heading">
                Error fetching user data
            </h4>
            <div class="alert-body">
                No user found with this user id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'apps-users-list'}"
                >
                    User List
                </b-link>
                for other users.
            </div>
        </b-alert>

        <template v-if="leadData">
            <!-- First Row -->
            <b-row>
                <b-col
                    cols="12"
                    lg="12"
                >
                    <lead-view-user-info-card :lead-data="leadData" />

                </b-col>

            </b-row>
            <b-row>
                <b-col
                    cols="12"
                    xl="12"
                    lg="12"
                    md="12"
                >
                    <lead-status-check-tab-account :lead-data="leadData" />

                </b-col>
            </b-row>

            <b-row>
                <b-col
                    cols="12"
                    xl="12"
                    lg="12"
                    md="12"
                >
                    <lead-overview-tab-account :lead-data="leadData" />
                </b-col>

            </b-row>



        </template>

    </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
    BRow, BCol, BAlert, BLink, BTab,
    BTabs, BCard,

} from 'bootstrap-vue'
import LeadLogList from '@/views/apps/LeadLog/LeadLog-list/LeadLogList.vue'
import usLeadStoreModule from '../LeadStoreModule'

import LeadOverviewTabAccount from './LeadOverviewTabAccount.vue'
import LeadViewUserInfoCard from './LeadViewUserInfoCard.vue'
import LeadStatusCheckTabAccount from './LeadStatusCheckTabAccount.vue'



export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,
      BTab,
      BTabs,
      BCard,

      // Local Components

    LeadOverviewTabAccount,
      LeadViewUserInfoCard,
    LeadStatusCheckTabAccount,




    LeadLogList,
  },
  setup() {
    const leadData = ref(null)

    const US_LEADS = 'app-us-lead'

    // Register module
    if (!store.hasModule(US_LEADS)) store.registerModule(US_LEADS, usLeadStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(US_LEADS)) store.unregisterModule(US_LEADS)
    })

    store.dispatch('app-us-lead/fetchUSLead', { id: router.currentRoute.params.id })
      .then(response => { leadData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          leadData.value = undefined
        }
      })

    return {
      leadData,
    }
  },
}
</script>

<style>

</style>
