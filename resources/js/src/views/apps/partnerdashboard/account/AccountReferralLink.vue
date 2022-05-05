<template>
  <b-card>
    <b-form>
      <b-row>
        <b-col cols="12">
          <div class="d-flex align-items-center mb-2">
            <feather-icon
              icon="LinkIcon"
              size="18"
            />
            <h4 class="mb-0 ml-75">
              Referral
            </h4>
          </div>
        </b-col>

        <!-- twitter -->
        <b-col md="12">
          <b-form-group
            label-for="referral_link"
            label="Link"
          >
            <b-form-input
              id="referral_link"
              v-model="referral_link"
              placeholder="Add link"
            />
          </b-form-group>
        </b-col>
        <!--/ twitter -->


        <b-col cols="12">
          <hr class="my-2">
        </b-col>


        <!-- button -->
        <b-button
                v-clipboard:copy="referral_link"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="primary"
        >
          Copy!
        </b-button>
        <!--/ buttons -->

      </b-row>

    </b-form>
  </b-card>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BCardText, BLink, BAvatar,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import {getUserData} from "@/auth/utils";
import axios from 'axios'
import {ref} from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
    BAvatar,
    ToastificationContent
  },
  directives: {
    Ripple,
  },
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const user = getUserData()
    const partnerData = ref({})
    const referral_link = ref('')
    axios.get(`/api/partner/getPartnerReferralLink/${user.id}`).then(res => {
      partnerData.value = res.data
      referral_link.value = 'https://portal.uping.co.uk/register?ref=' + partnerData.value
    })

    function onCopy() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Link copied',
          icon: 'BellIcon',
          variant: 'success'
        },
      })
    }
    function onError() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Failed to copy link!',
          icon: 'BellIcon',
          variant: 'warning'
        },
      })
    }



    return {
      partnerData,
      referral_link,
      onError,
      onCopy,
      ToastificationContent

    }
  },
}
</script>
