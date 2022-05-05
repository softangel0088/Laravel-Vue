<template>
  <div>


    <!-- Postback Info: Input Fields -->
    <b-form @submit.prevent="updatePostback">
      <b-row>

        <!-- Field: Postbackname -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Postback Name"
            label-for="postback_name"
          >
            <b-form-input
              id="postback_name"
              v-model="postbackData.postback.postback_name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Postback URL"
            label-for="affiliatePostbackUrl"
          >
            <b-form-input
              id="affiliatePostbackUrl"
              v-model="postbackData.postback.affiliatePostbackUrl"

            />
          </b-form-group>
        </b-col>






      </b-row>

    <!-- Action Buttons -->
    <b-button
      variant="primary"
      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      type="submit"
    >
      Save Changes
    </b-button>
    <b-button
      variant="outline-secondary"
      type="reset"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      @click="goBack()"
    >
      Back
    </b-button>
    </b-form>
  </div>


</template>

<script>
import {
  BButton,
  BMedia,
  BAvatar,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref } from '@vue/composition-api'
import {useToast} from "vue-toastification/composition";
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
  },
  props: {
    postbackData: {
      type: Object,
      required: true,
    },
      globalOptions: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
      const toast = useToast()




      function updatePostback(ev) {
          ev.preventDefault();
          console.log(ev)
          // debugger

          // loading.value = true;

          // console.log(props.userData.user)
          // debugger
          store.dispatch("apps-partner-postback/updatePostback",  props.postbackData.postback )
              .then((res) => {
                  console.log(res)
                  // debugger
                  toast({
                      component: ToastificationContent,
                      props: {
                          title: 'Postback updated successfully',
                          icon: 'CheckCircleIcon',
                          variant: 'success',
                      },
                  })
                  // loading.value = false;
                  // router.push({
                  //     name: "Dashboard",
                  // });
              })
              .catch((error) => {
                  // loading.value = false;
                  toast({
                      component: ToastificationContent,
                      props: {
                          title: 'Error fetching Postback',
                          icon: 'AlertTriangleIcon',
                          variant: 'danger',
                      },
                  })

                  if (error.response.status === 404) {
                      errors.value = error.response.data.errors;
                  }
              });
      }
      function goBack() {
          history.back();
      }

      const globalOptions = [
          { label: 'Global', value: '1' },
          { label: 'Non Global', value: '0' },
      ]


      return {
          updatePostback,
          goBack,
          ToastificationContent,
          globalOptions
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
