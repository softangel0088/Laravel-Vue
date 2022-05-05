<template>
  <b-card
    no-body
    class="border-primary"
  >
    <b-card-header class="d-flex justify-content-between align-items-center pt-75 pb-25">
      <h5 class="mb-0">
       Company Info
      </h5>
      <b-badge variant="light-primary">
        Basic
      </b-badge>
      <small class="text-muted w-100">Join Date: {{ partnerData.partner.created_at }}</small>
    </b-card-header>

      <b-card-body>
          <ul class="list-unstyled my-1">
              <li>
                  <span class="align-middle">VENDOR ID: {{ partnerData.partner.vendor_id }}</span>
              </li>
              <li>
                  <span class="align-middle">Name: {{partnerData.partner.company.name}}</span>
              </li>
              <li class="my-25">
                  <span class="align-middle">Email: {{partnerData.partner.company.email}}</span>
              </li>
              <li>
                  <span class="align-middle">Phone: {{partnerData.partner.company.phone}}</span>
              </li>
              <li>
                  <span class="align-middle">Address: {{partnerData.partner.address1}}</span>
              </li>
              <li>
                  <span class="align-middle">Postcode: {{partnerData.partner.postcode}}</span>
              </li>
              <li>
                  <span class="align-middle">Country: {{partnerData.partner.country}}</span>
              </li>

          </ul>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  block
                  class="mt-2"
                >
                  Edit Info
                </b-button>
      </b-card-body>

  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BBadge, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  directives: {
    Ripple,
  },
    props: {
        partnerData: {
            type: Object,
            required: true,
        },
    },

  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BBadge,
    BButton,
  },
}
</script>

<style>

</style>
