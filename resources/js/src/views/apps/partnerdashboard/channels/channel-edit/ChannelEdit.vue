<template>
  <component :is="postbackData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="postbackData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching Postback data
      </h4>
      <div class="alert-body">
        No buyer found with this Postback id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-partners-list'}"
        >
          Postback Data
        </b-link>
        for other partners.
      </div>
    </b-alert>

    <b-tabs
      v-if="postbackData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="BuyerIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Account</span>
        </template>
        <postback-edit-tab-account
          :postback-data="postbackData"
          class="mt-2 pt-75"
        />
      </b-tab>




    </b-tabs>
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import partnerStoreModule from '../PostbackStoreModule'
import PostbackEditTabAccount from './PostbackEditTabAccount.vue'
import PostbackEditTabInformation from './PostbackEditTabInformation.vue'
import PostbackEditTabSocial from './PostbackEditTabSocial.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    PostbackEditTabAccount,
    PostbackEditTabInformation,
    PostbackEditTabSocial,
  },
  setup() {
    const postbackData = ref(null)

    const PARTNER_POSTBACK = 'apps-partner-postback'

    // Register module
    if (!store.hasModule(PARTNER_POSTBACK)) store.registerModule(PARTNER_POSTBACK, partnerStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PARTNER_POSTBACK)) store.unregisterModule(PARTNER_POSTBACK)
    })



    store.dispatch('apps-partner-postback/fetchPostback', { id: router.currentRoute.params.id })
      .then(response => { postbackData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          postbackData.value = undefined
        }
      })

    return {
      postbackData,
    }
  },
}
</script>

<style>

</style>
