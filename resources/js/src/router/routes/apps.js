export default [
    {
        path: '/apps/calendar',
        name: 'apps-calendar',
        component: () => import('@/views/apps/calendar/Calendar.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },


    // *===============================================---*
    // *--------- TODO & IT'S FILTERS N TAGS ----------------------------*
    // *===============================================---*
    //
    // {
    //     path: '/apps/todo/:filter',
    //     name: 'apps-todo-filter',
    //     name: 'apps-todo-filter',
    //     component: () => import('@/views/apps/todo/Todo.vue'),
    //     meta: {
    //         contentRenderer: 'sidebar-left',
    //         contentClass: 'todo-application',
    //         navActiveLink: 'apps-todo',
    //             requiresAuth: true, // You can enable/disable authorization
    //             isAdmin: ['1'] // This can be accessed by only admin
    //     },
    //     beforeEnter(to, _, next) {
    //         if (['important', 'completed', 'deleted'].includes(to.params.filter)) next()
    //         else next({name: 'error-404'})
    //
    //     },
    //
    // },

    {
        path: '/admin/account-setting',
        name: 'admin-account-setting',
        component: () => import('@/views/apps/account/AccountSetting.vue'),
        meta: {
            requiresAuth: false,
            adminAuth: true,
            pageTitle: 'Account Settings',
            breadcrumb: [
                {
                    text: 'Account Settings',
                    active: true,
                },
            ],
        },
    },



    // *===============================================---*
    // *--------- OFFER  ---------------------------------------*
    // *===============================================---*
    {
        path: '/admin/offers',
        name: 'apps-admin-offers',
        component: () => import('@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue'),
        meta: {
            requiresAuth: false,
            adminAuth: true,
            contentRenderer: 'sidebar-left-detached',
            contentClass: 'ecommerce-application',
            pageTitle: 'Offers',
            breadcrumb: [
                {
                    text: 'Offers',
                    meta: {
                        requiresAuth: true,
                        adminAuth: true
                    }
                },
                {
                    text: 'List',
                    active: true,
                    meta: {
                        requiresAuth: true,
                        adminAuth: true
                    }
                },
            ],
        },
    },
    {
        path: '/apps/admin/offers/:id',
        name: 'apps-admin-offers-details',
        component: () => import('@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue'),
        meta: {
            pageTitle: 'Offer Details',
            // contentClass: 'ecommerce-application',
            breadcrumb: [
                {
                    text: 'Offer',
                    meta: {
                        requiresAuth: true,
                        adminAuth: true
                    }
                },
                {
                    text: 'List',
                    active: true,
                    meta: {
                        requiresAuth: true,
                        adminAuth: true
                    }
                },
                {
                    text: 'Offer Details',
                    active: true,
                    meta: {
                        requiresAuth: true,
                        adminAuth: true
                    }
                }
            ],
        },
    },

    /****
     * API DOCS
     */
    {
        path: '/apps/admin/api-docs/uk',
        name: 'admin-api-docs-uk',
        component: () => import('@/views/apps/apidocs/uk/UKDocsView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/admin/api-docs/us',
        name: 'admin-api-docs-us',
        component: () => import('@/views/apps/apidocs/us/USDocsView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/api-docs/:category',
        name: 'admin-api-docs-uk',
        component: () => import('@/views/apps/apidocs/uk/UKDocsView.vue'),
        meta: {
            requiresAuth: false,
            adminAuth: true,
            pageTitle: 'API Docs',
            breadcrumb: [
                {
                    text: 'Category',
                    active: true,
                },
            ],
            navActiveLink: 'admin-api-docs',
        },
    },
    {
        path: '/admin/api-docs/:category/:slug',
        name: 'admin-api-docs',
        component: () => import('@/views/apps/apidocs/uk/UKDocs.vue'),
        meta: {
            requiresAuth: false,
            adminAuth: true,
            pageTitle: 'Question',
            breadcrumb: [
                {
                    text: 'API Docs',
                    active: true,
                },
            ],
            navActiveLink: 'pages-knowledge-base',
        },
    },


    // *===============================================---*
    // *--------- USER ---- ---------------------------------------*
    // *===============================================---*
    {
        path: '/apps/users/list',
        name: 'apps-users-list',
        component: () => import('@/views/apps/user/user-list/UserList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/users/view/:id',
        name: 'apps-users-view',
        component: () => import('@/views/apps/user/user-view/UserView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        },
    },
    {
        path: '/apps/users/edit/:id',
        name: 'apps-users-edit',
        component: () => import('@/views/apps/user/user-edit/UserEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // BUYER LIST
    {
        path: '/apps/buyers/list',
        name: 'apps-buyers-list',
        component: () => import('@/views/apps/buyer/buyer-list/BuyerList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyers/view/:id',
        name: 'apps-buyers-view',
        component: () => import('@/views/apps/buyer/buyer-view/BuyerView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyers/edit/:id',
        name: 'apps-buyers-edit',
        component: () => import('@/views/apps/buyer/buyer-edit/BuyerEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // BUYER SETUP LIST

    {
        path: '/apps/buyer-tier/list',
        name: 'apps-buyer-tier-list',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-list/BuyerTierList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-tier/view/:id',
        name: 'apps-buyer-tier-view',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-view/BuyerTierView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-tier/edit/:id',
        name: 'apps-buyer-tier-edit',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-edit/BuyerTierEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // BUYER FILTERS
    {
        path: '/apps/buyer-filters/list',
        name: 'apps-buyer-filter-list',
        component: () => import('@/views/apps/buyer-filter/buyer-filter-list/BuyerFilterList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-filter/view/:id',
        name: 'apps-buyer-filter-view',
        component: () => import('@/views/apps/buyer-filter/buyer-filter-view/BuyerFilterView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-filter/edit/:id',
        name: 'apps-buyer-filter-edit',
        component: () => import('@/views/apps/buyer-filter/buyer-filter-edit/BuyerFilterEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // FILTERS BY TIER
    {
        path: '/apps/filter/view/:id',
        name: 'apps-filter-view',
        component: () => import('@/views/apps/filter/filter-view/FilterView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/filter/edit/:id',
        name: 'apps-filter-edit',
        component: () => import('@/views/apps/filter/filter-edit/FilterEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/filter/add',
        name: 'apps-filter-add',
        component: () => import('@/views/apps/filter/filter-add/FilterAdd.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // PARTNERS
    {
        path: '/apps/admin/partner/list',
        name: 'apps-admin-partner-list',
        component: () => import('@/views/apps/partner/partner-list/PartnerList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/admin/partner/view/:id',
        name: 'apps-admin-partner-view',
        component: () => import('@/views/apps/partner/partner-view/PartnerView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/admin/partner/edit/:id',
        name: 'apps-admin-partner-edit',
        component: () => import('@/views/apps/partner/partner-edit/PartnerEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // OFFER


    {
        path: '/apps/admin/offer/add',
        name: 'apps-admin-offer-add',
        component: () => import('@/views/apps/offer/offer-add/OfferAdd.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/admin/offer/edit/:id',
        name: 'apps-admin-offer-edit',
        component: () => import('@/views/apps/offer/offer-edit/OfferEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },




    // MAPPING
    {
        path: '/apps/mapping/list',
        name: 'apps-mapping-list',
        component: () => import('@/views/apps/mapping/mapping-list/MappingList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/mapping/view/:slug',
        name: 'apps-mapping-view',
        component: () => import('@/views/apps/mapping/mapping-view/MappingView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/mapping/edit/:id',
        name: 'apps-mapping-edit',
        component: () => import('@/views/apps/mapping/mapping-edit/MappingEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },


    // MAPPING TIER
    {
        path: '/apps/mapping-tier/list',
        name: 'apps-mapping-tier-list',
        component: () => import('@/views/apps/mapping-tier/mapping-tier-list/MappingTierList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/mapping-tier/view/:id',
        name: 'apps-mapping-tier-view',
        component: () => import('@/views/apps/mapping-tier/mapping-tier-view/MappingTierView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/mapping-tier/edit/:id',
        name: 'apps-mapping-tier-edit',
        component: () => import('@/views/apps/mapping-tier/mapping-tier-edit/MappingTierEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // POSTBAVCK
    {
        path: '/apps/postback/list',
        name: 'apps-postback-list',
        component: () => import('@/views/apps/postback/postback-list/PostbackList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/postback/view/:id',
        name: 'apps-postback-view',
        component: () => import('@/views/apps/postback/postback-view/PostbackView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/postback/edit/:id',
        name: 'apps-postback-edit',
        component: () => import('@/views/apps/postback/postback-edit/PostbackEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // POSTBAVCK MAPPING
    {
        path: '/apps/postback-mapping/list',
        name: 'apps-postback-mapping-list',
        component: () => import('@/views/apps/postback-mapping/postback-mapping-list/PostbackMappingList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/postback-mapping/view/:id',
        name: 'apps-postback-mapping-view',
        component: () => import('@/views/apps/postback-mapping/postback-mapping-view/PostbackMappingView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/postback-mapping/edit/:id',
        name: 'apps-postback-mapping-edit',
        component: () => import('@/views/apps/postback-mapping/postback-mapping-edit/PostbackMappingEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },


    // ADVERTISER
    {
        path: '/apps/advertiser/list',
        name: 'apps-advertiser-list',
        component: () => import('@/views/apps/advertiser/advertiser-list/AdvertiserList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/advertiser/view/:id',
        name: 'apps-advertisers-view',
        component: () => import('@/views/apps/advertiser/advertiser-view/AdvertiserView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/advertiser/edit/:id',
        name: 'apps-advertisers-edit',
        component: () => import('@/views/apps/advertiser/advertiser-edit/AdvertiserEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // UK LEADS
    {
        path: '/apps/uk/lead/list',
        name: 'apps-uk-lead-list',
        component: () => import('@/views/apps/uk-lead/uk-lead-list/LeadList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/uk/lead/view/:id',
        name: 'apps-uk-lead-view',
        component: () => import('@/views/apps/uk-lead/uk-lead-view/LeadView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // US LEADS
    {
        path: '/apps/us/lead/list',
        name: 'apps-us-lead-list',
        component: () => import('@/views/apps/us-lead/us-lead-list/LeadList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/us/lead/view/:id',
        name: 'apps-us-lead-view',
        component: () => import('@/views/apps/us-lead/us-lead-view/LeadView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // CA LEADS
    {
        path: '/apps/ca/lead/list',
        name: 'apps-ca-lead-list',
        component: () => import('@/views/apps/ca-lead/ca-lead-list/LeadList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/ca/lead/view/:id',
        name: 'apps-ca-lead-view',
        component: () => import('@/views/apps/ca-lead/ca-lead-view/LeadView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },


    // CF LEADS
    {
        path: '/apps/cf/lead/list',
        name: 'apps-cf-lead-list',
        component: () => import('@/views/apps/cf-lead/cf-lead-list/LeadList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/cf/lead/view/:id',
        name: 'apps-cf-lead-view',
        component: () => import('@/views/apps/cf-lead/cf-lead-view/LeadView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },



    // REPORTS
    //REPORTS
    // UK
    {
        path: '/admin/report/uk/list',
        name: 'apps-admin-report-uk-list',
        component: () => import('@/views/apps/report/uk/report-list/ReportList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/uk/view/:id',
        name: 'apps-admin-report-uk-view',
        component: () => import('@/views/apps/report/uk/report-view/ReportView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/uk/edit/:id',
        name: 'apps-admin-report-uk-edit',
        component: () => import('@/views/apps/report/uk/report-edit/ReportEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // USA
    {
        path: '/admin/report/us/list',
        name: 'apps-admin-report-us-list',
        component: () => import('@/views/apps/report/us/report-list/ReportList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/us/view/:id',
        name: 'apps-admin-report-us-view',
        component: () => import('@/views/apps/report/us/report-view/ReportView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/us/edit/:id',
        name: 'apps-admin-report-us-edit',
        component: () => import('@/views/apps/report/us/report-edit/ReportEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // Offer
    {
        path: '/admin/report/offer/list',
        name: 'apps-admin-report-offer-list',
        component: () => import('@/views/apps/report/offer/report-list/ReportList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/offer/view/:id',
        name: 'apps-admin-report-offer-view',
        component: () => import('@/views/apps/report/offer/report-view/ReportView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/offer/edit/:id',
        name: 'apps-admin-report-offer-edit',
        component: () => import('@/views/apps/report/offer/report-edit/ReportEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // Postback
    {
        path: '/admin/report/postback/list',
        name: 'apps-admin-report-postback-list',
        component: () => import('@/views/apps/report/postback/report-list/ReportList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/postback/view/:id',
        name: 'apps-admin-report-postback-view',
        component: () => import('@/views/apps/report/postback/report-view/ReportView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/postback/edit/:id',
        name: 'apps-admin-report-postback-edit',
        component: () => import('@/views/apps/report/postback/report-edit/ReportEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // Referral
    {
        path: '/admin/report/referral/list',
        name: 'apps-admin-report-referral-list',
        component: () => import('@/views/apps/report/referral/report-list/ReportList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/referral/view/:id',
        name: 'apps-admin-report-referral-view',
        component: () => import('@/views/apps/report/referral/report-view/ReportView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/report/referral/edit/:id',
        name: 'apps-admin-report-referral-edit',
        component: () => import('@/views/apps/report/referral/report-edit/ReportEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // POSTBACKS
    {
        path: '/admin/postback/list',
        name: 'apps-admin-postback-list',
        component: () => import('@/views/apps/postback/postback-list/PostbackList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/postback/view/:id',
        name: 'apps-admin-postback-view',
        component: () => import('@/views/apps/postback/postback-view/PostbackView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/admin/postback/edit/:id',
        name: 'apps-admin-postback-edit',
        component: () => import('@/views/apps/postback/postback-edit/PostbackEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },



    // OFFERS
    {
        path: '/apps/offer/list',
        name: 'apps-offer-list',
        component: () => import('@/views/apps/offer/offer-list/OfferList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/offer/view/:id',
        name: 'apps-ecommerce-product-details',
        component: () => import('@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/offer/edit/:id',
        name: 'apps-offer-edit',
        component: () => import('@/views/apps/offer/offer-edit/OfferEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },


    // BUYER TIERS

    {
        path: '/apps/buyer-tier/list',
        name: 'apps-buyer-tier-list',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-list/BuyerTierList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-tier/view/:id',
        name: 'apps-buyer-tier-view',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-view/BuyerTierView.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/buyer-tier/edit/:id',
        name: 'apps-buyer-tier-edit',
        component: () => import('@/views/apps/buyer-tier/buyer-tier-edit/BuyerTierEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // TELESCOPE
    {
        path: '/telescope',
        name: 'apps-telescope',
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    // HORIZON
    {
        path: '/horizon',
        name: 'apps-horizon',
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },

    // Invoice
    {
        path: '/apps/invoice/list',
        name: 'apps-invoice-list',
        component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/invoice/preview/:id',
        name: 'apps-invoice-preview',
        component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/invoice/add/',
        name: 'apps-invoice-add',
        component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
    {
        path: '/apps/invoice/edit/:id',
        name: 'apps-invoice-edit',
        component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
        meta: {
            requiresAuth: true,
            adminAuth: true
        }
    },
]
