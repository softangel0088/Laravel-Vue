<template>
    <!-- content -->
    <div class="blog-detail-wrapper">
        <b-row>
            <!-- INFO -->
            <b-col cols="12">
                <b-card
                    img-top
                    img-alt="Blog Detail Pic"
                    title="USA API Docs"
                >
                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div>

                        <p>Lead generators are required to send the lead via HTTP POST in JSON format to the endpoint
                            below:</p>
                        <br>
                        <b-col cols="6">
                            <div class="center">

                                <b-badge
                                    href="#"
                                    class="d-block"
                                    pill
                                    variant="light-primary"
                                >
                                    https://www.portal.uping.co.uk/leads/application/usa/post
                                </b-badge>
                            </div>
                        </b-col>

                        <br>

                        <p>UPING will only accept a lead when the required fields are valid. UPING will not accept a
                            lead when any of the required fields are omitted or invalid(null or blank).</p>
                        <br>
                        <p>The order of the fields sent in the post does not matter but the field names must be
                            exact.</p>


                    </div>

                </b-card>
            </b-col>


            <!-- Application -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Application
                </h6>
                <b-card-actions
                    title="Application"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="items"
                        :fields="fields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"
                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
                            <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Source -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Source
                </h6>
                <b-card-actions
                    title="Source"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="sourceItems"
                        :fields="sourceFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"
                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Loan -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Loan
                </h6>
                <b-card-actions
                    title="Loan"
                    action-collapse

                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="loanItems"
                        :fields="loanFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"
                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Applicant -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Applicant
                </h6>
                <b-card-actions
                    title="Applicant"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="applicantItems"
                        :fields="applicantFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"
                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
<!--                            <b-badge v-else&ndash;&gt;-->
                            <!--                                         pill variant="primary"-->
                            <!--                                         class="badge-glow"> </b-badge>-->
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Residence -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Residence
                </h6>
                <b-card-actions
                    title="Residence"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="residenceItems"
                        :fields="residenceFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"

                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
<!--                            &lt;!&ndash;                                <b-badge v-else&ndash;&gt;-->
                            <!--                                         pill variant="primary"-->
                            <!--                                         class="badge-glow"> </b-badge>-->
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Employer -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Employer
                </h6>
                <b-card-actions
                    title="Employer"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="employerItems"
                        :fields="employerFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"

                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
<!--                            &lt;!&ndash;                                <b-badge v-else&ndash;&gt;-->
                            <!--                                         pill variant="primary"-->
                            <!--                                         class="badge-glow"> </b-badge>-->
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Bank -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Bank
                </h6>
                <b-card-actions
                    title="Bank"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="bankItems"
                        :fields="bankFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"

                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
<!--                            &lt;!&ndash;                                <b-badge v-else&ndash;&gt;-->
                            <!--                                         pill variant="primary"-->
                            <!--                                         class="badge-glow"> </b-badge>-->
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>

            <!-- Consent -->
            <b-col
                id="willywonka"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    Consent
                </h6>
                <b-card-actions
                    title="Consent"
                    action-collapse
                >

                    <b-media no-body>
                        <b-media-body>
                            <small class="text-muted mr-50">by</small>
                            <small>
                                <b-link class="text-body">UPING</b-link>
                            </small>
                            <span class="text-muted ml-75 mr-50">|</span>
                            <small class="text-muted">Mar 17, 2022</small>
                        </b-media-body>
                    </b-media>
                    <div class="my-1 py-25">
                            <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                JSON
                            </b-badge>
                         <b-badge
                                pill
                                class="mr-75"
                                :variant="'light-primary'"
                            >
                                XML
                            </b-badge>
                    </div>
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                        class="blog-content"
                    />
                    <b-table
                        responsive
                        :items="consentItems"
                        :fields="consentFields"
                        class="mb-0"
                        :small="true"
                        :striped="true"
                        :bordered="true"
                        :borderless="true"

                    >
                        <template #cell(required)="data">
                            <b-badge v-if="data.item.Required == 1"
                                     pill variant="primary"
                                     class="badge-glow"> Required
                            </b-badge>
                             <b-badge v-else-if="data.item.Required == 2"
                                     pill variant="secondary"
                                     class="badge-glow"> Required If
                            </b-badge>
<!--                            &lt;!&ndash;                                <b-badge v-else&ndash;&gt;-->
                            <!--                                         pill variant="primary"-->
                            <!--                                         class="badge-glow"> </b-badge>-->
                        </template>

                    </b-table>
                </b-card-actions>

            </b-col>


            <!-- POST -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    JSON POST Example
                </h6>
                <b-card-actions
                    title="JSON POST Example"
                    action-collapse
                >
                    <b-badge
                        pill
                        class="mr-75"
                        :variant="'light-primary'"
                    >
                        JSON POST Example
                    </b-badge>
                    <br>
                    <br>


                    <pre class="text-success bg-gray font-weight-bold">

                            {
                            "response_type": "json",
                            "tier": "0",
                            "vid": "AFF_111",
                            "subid": "12345",
                            "oid": "5",
                            "minCommissionAmount": "",
                            "maxCommissionAmount": "",
                            "source": {
                            "ipAddress": "174.62.231.140",
                            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.43",
                            "creationUrl": "https://affiliate-site.com/",
                            "referringUrl": "https://affiliate-site.com/",
                            },
                            "loan": {
                            "loanAmount": "600",
                            "loanTerms": 3,
                            "loanPurpose": "Subsistence",
                            "recentLoanAmount": 1
                            },
                            "applicant": {
                            "nameTitle": "Mr",
                            "firstName": "John",
                            "lastName": "Doe",
                            "dateOfBirthDay": "02",
                            "dateOfBirthMonth": "06",
                            "dateOfBirthYear": "1976",
                            "email": "john@doe.co.uk",
                            "mobilePhoneNumber": "07777777777",
                            "homePhoneNumber": "07777777777",
                            "workPhoneNumber": "07777777777",
                            "maritalStatus": "Married",
                            "dependants": 2
                            },
                            "residence": {
                            "houseNumber": "71",
                            "houseName": "North Cottage",
                            "addressStreet1": "Shelton Street",
                            "locality": "London",
                            "city": "London",
                            "county": "London",
                            "postcode": "WC2H 9QJ",
                            "residentialStatus": "HomeOwner",
                            "monthsAtAddress": 24,
                            "monthlyMortgageRent": 900
                            },
                            "employer": {
                            "employerName": "1234 Ltd",
                            "jobTitle": "Manager",
                            "employerIndustry": "HotelRestaurantAndLeisure",
                            "incomeSource": "SelfEmployed",
                            "incomeCycle": "TwiceMonthly",
                            "monthlyIncome": "2100",
                            "monthsAtEmployer": 24,
                            "combinedMonthlyHouseHoldIncome": "2000",
                            "nextPayDateDay": "02",
                            "nextPayDateMonth": "09",
                            "nextPayDateYear": "2021",
                            "followingPayDateDay": "11",
                            "followingPayDateMonth": "01",
                            "followingPayDateYear": "2021",
                            "incomePaymentType": "Cash"
                            },
                            "expense": {
                            "monthlyRepayments": 100,
                            "foodExpense": 100,
                            "transportExpense": 100,
                            "utilitiesExpense": 100,
                            "monthlyFood": 100,
                            "otherExpense": 50

                            },
                            "bank": {
                            "bankCardType": "Visa",
                            "bankAccountNumber": "12345678910",
                            "bankRoutingNumber": "123456789",
                            "bankAccountLength": "36"
                            },
                            "consent": {
                            "consentFinancial": "1",
                            "consentThirdPartyEmails": "1"
                            }
                            }

                        </pre>


                </b-card-actions>
            </b-col>

            <!-- STATUS -->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    JSON Status Poll Example
                </h6>
                <b-card-actions
                    title="JSON Status Poll Example"
                    action-collapse
                >

                    <b-badge
                        pill
                        class="mr-75"
                        :variant="'light-primary'"
                    >
                        JSON Status Poll Example
                    </b-badge>
                    <br>
                    <br>


                    <pre class="text-success">
                               [
                                  {
                                    "PercentageComplete": 0,
                                    "CheckStatusID": "cb14596e-d1f9-4018-b312-04adadffc0d2",
                                    "CheckStatus": "pending",
                                    "CheckStatusURL": "https://portal.uping.co.uk/leads/application/status/cb14596e-d1f9-4018-b312-04adadffc0d2"
                                  }
                                ]

                               </pre>

                </b-card-actions>

            </b-col>

            <!-- RESPONSE-->
            <b-col
                id="blogComment"
                cols="12"
                class="mt-2"
            >
                <h6 class="section-label">
                    JSON Response Example
                </h6>

                <b-card-actions
                    title="JSON Response Example"
                    action-collapse
                >
                    <b-badge
                        pill
                        class="mr-75"
                        :variant="'light-primary'"
                    >
                        JSON Response Example
                    </b-badge>
                    <br>
                    <br>


                    <pre class="text-success">
                               [
                                  {
                                    "Response": "Accepted",
                                    "Price": 8,
                                    "RedirectURL": "https://portal.uping.co.uk/leads/application/redirecturl/33df01e323-6e03-4b50-a6d5-517b7bbf45bf24",
                                    "Leadid": "df01e323-6e03-4b50-a6d5-517b7bbf45bf"
                                     "ModelType": "Pingtree"
                                  }
                                ]

                   </pre>

                </b-card-actions>

            </b-col>


        </b-row>
    </div>
    <!--/ content -->

</template>

<script>
    import {
        BFormInput,
        BMedia,
        BAvatar,
        BMediaAside,
        BMediaBody,
        BImg,
        BLink,
        BFormGroup,
        BInputGroup,
        BInputGroupAppend,
        BCard,
        BRow,
        BCol,
        BBadge,
        BCardText,
        BDropdown,
        BDropdownItem,
        BForm,
        BFormTextarea,
        BFormCheckbox,
        BButton,
        BTable,
        BAlert,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import {kFormatter} from '@core/utils/filter'
    import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'
    import BCardActions from '@core/components/b-card-actions/BCardActions.vue'


    export default {
        components: {
            BFormInput,
            BMedia,
            BAvatar,
            BMediaAside,
            BMediaBody,
            BLink,
            BCard,
            BRow,
            BCol,
            BFormGroup,
            BInputGroup,
            BInputGroupAppend,
            BImg,
            BBadge,
            BCardText,
            BDropdown,
            BForm,
            BDropdownItem,
            BFormTextarea,
            BFormCheckbox,
            BButton,
            ContentWithSidebar,
            BTable,
            BAlert,
            BCardActions,
        },
        directives: {
            Ripple,
        },
        data() {
            return {
                search_query: '',
                commentCheckmark: '',
                blogDetail: [],
                blogSidebar: {},
                socialShareIcons: ['GithubIcon', 'GitlabIcon', 'FacebookIcon', 'TwitterIcon', 'LinkedinIcon'],

                fields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                sourceFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                loanFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                bankFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                applicantFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                residenceFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                employerFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                consentFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],
                bankFields: [
                    'field',
                    'Description',
                    'DataType',
                    'Constraints',
                    {
                        key: 'Required', label: 'Required',
                    },
                ],


                items: [
                    {
                        field: 'response_type',
                        Description: 'Choose response type: JSON or XML',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'istest',
                        Description: 'For Test Mode: true\n' +
                            'For Live Mode: false \n' +
                            'Or Leave out request for Live Mode',
                        DataType: 'Boolean',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'vid',
                        Description: 'Also known as the "Vendor ID", this identifies the Affiliate within\n' +
                            ' our system that is the source of the lead',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'subid',
                        Description: 'Defines the campaign that was the source of the lead.',
                        DataType: 'string',
                        Constraints: 'Please, do NOT pass unique values into this field.',
                        Required: 1,
                    },
                    {
                        field: 'oid',
                        Description: 'Please set to 1.',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'timeout',
                        Description: 'Defines the amount of time; in seconds; the Affiliate will wait for\n' +
                            '  a response before assuming the lead is declined.',
                        DataType: 'integer',
                        Constraints: 'The service will automatically abort requests to avoid \n' +
                            ' Non-Redirected Leads,',
                        Required: 0,
                    },
                    {
                        field: 'tier',
                        Description: 'Minimum price you are willing to sell leads for.',
                        DataType: 'integer',
                        Constraints: 'For all tiers - use value "0".' +
                            ' For specific tiers, contact us.',
                        Required: 2,
                    },
                    {
                        field: 'minCommissionAmount',
                        Description: 'Minimum price you are willing to sell leads for.',
                        DataType: 'decimal',
                        Constraints: 'Required if tier is not present',
                        Required: 2,
                    },
                    {
                        field: 'maxCommissionAmount',
                        Description: 'Maximum price that you are willing for us to show our buyers the\n' +
                            ' leads at.',
                        DataType: 'decimal',
                        Constraints: 'Required if tier is not present',
                        Required: 2,
                    },
                ],
                sourceItems: [
                    {
                        field: 'ipAddress',
                        Description: 'IP address is allowed in the following format:\n' +
                            ' IPv4: xxx.xxx.xxx.xxx',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'userAgent',
                        Description: 'HTTP User Agent',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'creationUrl',
                        Description: 'Page URL where the form was filled',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'referringUrl',
                        Description: 'Lead referrer URL (search engine, another site, etc)',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },
                ],
                loanItems: [
                    {
                        field: 'loanAmount',
                        Description: 'Loan Amount the customer is requesting',
                        DataType: 'json',
                        Constraints: 'Allowed value range: 50 - 50,000 (USD). Multiple of 50.',
                        Required: 1,
                    },

                    {
                        field: 'loanTerms',
                        Description: 'The length of the loan the customer is requesting',
                        DataType: 'json',
                        Constraints: 'Allowed value range:\n' +
                            ' 1' +
                            ' ,3' +
                            ' ,6' +
                            ' ,9' +
                            ' ,12' +
                            ' ,18' +
                            ' ,24' +
                            ' ,36' +
                            ' ,48' +
                            ' ,60' +
                            ' ,72' +
                            ' ,84' +
                            ' ,96' +
                            ' ,108' +
                            ' ,120' +
                            ' (months)',
                        Required: 1,
                    },

                    {
                        field: 'loanPurpose',
                        Description: 'The reason for the loan.',
                        DataType: 'string',
                        Constraints: 'Loan Purpose must be one of the following:\n' +
                            '\n' +
                            ' DebtConsolidation,\n' +
                            ' Subsistence,\n' +
                            ' OneOffPurchase,\n' +
                            ' Other,\n' +
                            ' CarLoan,\n' +
                            ' PayBills,\n' +
                            ' PayOffLoan,\n' +
                            ' ShortTermCash,\n' +
                            ' HomeImprovements',
                        Required: 1,
                    },
                ],
                applicantItems: [
                    {
                        field: 'nameTitle',
                        Description: 'Title of the customer',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: Mr, Mrs, Ms, Miss',
                        Required: 1,
                    },
                    {
                        field: 'firstName',
                        Description: 'First name of the customer',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 1 - 128',
                        Required: 1,
                    },

                    {
                        field: 'lastName',
                        Description: 'Last name of the customer',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'dateOfBirthDay',
                        Description: 'Date Of Birth Day of the customer',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'dateOfBirthMonth',
                        Description: ' Date Of Birth Month of the customer',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'dateOfBirthYear',
                        Description: ' Date Of Birth Year of the customer',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'email',
                        Description: 'Email of he customer',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 5 - 128',
                        Required: 1,
                    },

                    {
                        field: 'mobilePhoneNumber',
                        Description: 'Cell phone of the customer',
                        DataType: 'string',
                        Constraints: 'Must be 11 digits',
                        Required: 1,
                    },

                    {
                        field: 'homePhoneNumber',
                        Description: 'Home phone of the customer',
                        DataType: 'string',
                        Constraints: 'Must be 11 digits',
                        Required: 1,
                    },

                    {
                        field: 'workPhoneNumber',
                        Description: 'Work phone of the customer',
                        DataType: 'string',
                        Constraints: 'Must be 11 digits',
                        Required: 1,
                    },

                    {
                        field: 'maritalStatus',
                        Description: 'The marital Status of the customer',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: ' +
                            'Single,\n' +
                            ' Married,\n' +
                            ' LivingTogether,\n' +
                            ' Separated,\n' +
                            ' Divorced,\n' +
                            ' Widowed,\n' +
                            ' Other,',
                        Required: 1,
                    },
                    {
                        field: 'dependants',
                        Description: 'The amount of dependants the customer has',
                        DataType: 'integer',
                        Constraints: 'Accepted value range: 1 - 4',
                        Required: 1,
                    },
                ],
                residenceItems: [
                    {
                        field: 'houseNumber',
                        Description: '',
                        DataType: 'string',
                        Constraints: 'Required if houseNumber is not present',
                        Required: 2,
                    },
                    {
                        field: 'houseName',
                        Description: '',
                        DataType: 'string',
                        Constraints: 'Required if houseNumber is not present',
                        Required: 2,
                    },
                    {
                        field: 'addressStreet1',
                        Description: 'Address',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 6 - 128',
                        Required: 1,
                    },

                    {
                        field: 'locality',
                        Description: 'Town/ Locality of the customer',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'city',
                        Description: 'City',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 2 - 32',
                        Required: 1,
                    },

                    {
                        field: 'county',
                        Description: 'County',
                        DataType: 'string',
                        Constraints: '',
                        Required: 1,
                    },

                    {
                        field: 'postcode',
                        Description: 'Postcode',
                        DataType: 'string',
                        Constraints: 'Must be 5 digits',
                        Required: 1,
                    },

                    {
                        field: 'residentialStatus',
                        Description: '',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: ' +
                            ' HomeOwner,\n' +
                            'PrivateTenant,\n' +
                            'CouncilTenant,\n' +
                            'LivingWithParents,\n' +
                            'LivingWithFriends,\n' +
                            'Other,',
                        Required: 1,
                    },
                    {
                        field: 'monthsAtAddress',
                        Description: 'Months at address',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: 12, 24, 36, 48, 60 ',
                        Required: 1,
                    },
                ],
                employerItems: [
                    {
                        field: 'employerName',
                        Description: 'Employer',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 1 - 128',
                        Required: 1,
                    },
                    {
                        field: 'jobTitle',
                        Description: 'Job title',
                        DataType: 'string',
                        Constraints: 'Allowed string length: 1 - 128',
                        Required: 1,
                    },
                    {
                        field: 'incomeSource',
                        Description: 'Income type',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: ' +
                            ' SelfEmployed, \n' +
                            'EmployedFullTime, \n' +
                            'EmployedPartTime, \n' +
                            'EmployedTemporary, \n' +
                            'Pension, \n' +
                            'DisabilityBenefits, \n' +
                            'Benefits, \n' +
                            'Retired, \n' +
                            'Unemployed, \n' +
                            'Student',
                        Required: 1,
                    },
                    {
                        field: 'incomeCycle',
                        Description: 'Income Cycle',
                        DataType: 'string',
                        Constraints: 'Must be one of the following: ' +
                            'Weekly, \n' +
                            'BiWeekly, \n' +
                            'Fortnightly, \n' +
                            'LastDayMonth, \n' +
                            'LastWorkingDayMonth, \n' +
                            'TwiceMonthly, \n' +
                            'FourWeekly, ',
                        Required: 1,
                    },
                    {
                        field: 'monthlyIncome',
                        Description: 'Monthly income',
                        DataType: 'integer',
                        Constraints: 'Allowed value range: 100 - 15,000',
                        Required: 1,
                    },
                    {
                        field: 'monthsAtEmployer',
                        Description: 'Months at employer',
                        DataType: 'integer',
                        Constraints: 'Must be one of the following: 12, 24, 36, 48, 60',
                        Required: 1,
                    },
                    {
                        field: 'monthlyMortgageRent',
                        Description: 'Monthly Mortgage / Rent of customer',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'combinedMonthlyHouseHoldIncome',
                        Description: 'integer',
                        DataType: '',
                        Constraints: 'Required If maritalStatus is ~ Married',
                        Required: 2,
                    },
                    {
                        field: 'nextPayDateDay',
                        Description: 'Next Pay Date Day',
                        DataType: 'integer',
                        Constraints: 'Format:: DD',
                        Required: 1,
                    },
                    {
                        field: 'nextPayDateMonth',
                        Description: 'Next Pay Date Month',
                        DataType: 'integer',
                        Constraints: 'Format:: MM',
                        Required: 1,
                    },
                    {
                        field: 'nextPayDateYear',
                        Description: 'Next Pay Date Year',
                        DataType: 'integer',
                        Constraints: 'Format:: YYYY',
                        Required: 1,
                    },
                    {
                        field: 'followingPayDateDay',
                        Description: 'Following Pay Date Day',
                        DataType: 'integer',
                        Constraints: 'Format:: DD',
                        Required: 1,
                    },
                    {
                        field: 'followingPayDateMonth',
                        Description: 'Following Pay Date Month',
                        DataType: 'integer',
                        Constraints: 'Format:: MM',
                        Required: 1,
                    },
                    {
                        field: 'followingPayDateYear',
                        Description: 'Following Pay Date Year',
                        DataType: 'integer',
                        Constraints: 'Format:: YYYY',
                        Required: 1,
                    },
                    {
                        field: 'incomePaymentType',
                        Description: 'How does the customer receive there income.',
                        DataType: 'integer',
                        Constraints: 'Must be one of the following: \n' +
                            'Cheque,\n' +
                            'Cash,\n' +
                            'RegionalDirectDeposit,\n' +
                            'NonRegionalDirectDeposit,',
                        Required: 1,
                    },

                ],
                expenseItems: [
                    {
                        field: 'monthlyRepayments',
                        Description: 'Monthly Credit Repayments',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'utilitiesExpense',
                        Description: 'Monthly Credit Expenses',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'foodExpense',
                        Description: 'Monthly Food Expenses',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'transportExpense',
                        Description: 'Monthly Transport Expenses',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                    {
                        field: 'otherExpense',
                        Description: 'Other Monthly Expenses',
                        DataType: 'integer',
                        Constraints: '',
                        Required: 1,
                    },
                ],
                consentItems: [
                    {
                        field: 'consentFinancial',
                        Description: 'Credit check',
                        DataType: 'Boolean',
                        Constraints: 'Must be one of the following:',
                        Required: 1,
                    },
                    {
                        field: 'consentThirdPartyEmails',
                        Description: 'Re-marketing Email',
                        DataType: 'Boolean',
                        Constraints: 'Must be one of the following:',
                        Required: 0,
                    },
                    {
                        field: 'consentThirdPartySMS',
                        Description: 'Re-marketing SMS',
                        DataType: 'Boolean',
                        Constraints: 'Must be one of the following:',
                        Required: 0,
                    },
                    {
                        field: 'consentThirdPartyPhone',
                        Description: 'Re-marketing Phone',
                        DataType: 'Boolean',
                        Constraints: 'Must be one of the following:',
                        Required: 0,
                    },
                    {
                        field: 'consentThirdPartyPost',
                        Description: 'Re-marketing Post',
                        dataType: 'Boolean',
                        Constraints: 'Must be one of the following:',
                        Required: 0,
                    },
                ],
                bankItems: [
                    {
                        field: 'bankName',
                        Description: 'Bank name',
                        dataType: 'string',
                        Constraints: 'Allowed string length: 2 - 64',
                        Required: 0,
                    },
                    {
                        field: 'bankPhone',
                        Description: 'string',
                        dataType: 'Constraints',
                        Constraints: 'Allowed string length: 2 - 64',
                        Required: 0,
                    },
                    {
                        field: 'bankCardType',
                        Description: 'Bank Debit Card Type',
                        dataType: 'string',
                        Constraints: 'Must be one of the following: >\n' +
                            'Solo, \n' +
                            'SwitchMaestro, \n' +
                            'Visa, \n' +
                            'VisaDebit, \n' +
                            'VisaDelta, \n' +
                            'VisaElectron, \n' +
                            'MasterCard, \n' +
                            'MasterCardDebit',
                        Required: 1,
                    },
                    {
                        field: 'bankAccountNumber',
                        Description: 'Bank Account Number of the customer',
                        dataType: 'string',
                        Constraints: 'Must be 8 digits',
                        Required: 1,
                    },
                    {
                        field: 'bankRoutingNumber',
                        Description: 'Bank SortCode of the customer',
                        dataType: 'string',
                        Constraints: 'Must be 6 digits',
                        Required: 1,
                    },
                    {
                        field: 'bankAccountLength',
                        Description: 'Time With Bank',
                        dataType: 'string',
                        Constraints: 'Allowed value range: 12, 24, 36, 48, 60 (months)',
                        Required: 1,
                    },
                ],
            }
        },
        created() {
            this.$http.get('/blog/list/data/detail').then(res => {
                this.blogDetail = res.data
            })
            this.$http.get('/blog/list/data/sidebar').then(res => {
                this.blogSidebar = res.data
            })
        },
        methods: {
            kFormatter,
            tagsColor(tag) {
                if (tag === 'Quote') return 'light-info'
                if (tag === 'Gaming') return 'light-danger'
                if (tag === 'Fashion') return 'light-primary'
                if (tag === 'Video') return 'light-warning'
                if (tag === 'Food') return 'light-success'
                return 'light-primary'
            },
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/pages/page-blog.scss';
</style>
