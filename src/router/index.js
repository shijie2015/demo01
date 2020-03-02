import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/middleend',
    component: Layout,
    meta: { title: 'Middle End', icon: 'all' },
    children: [
      {
        path: 'trade-center',
        name: 'TradeCenter',
        meta: { title: 'Trade Center' },
        children: [
          {
            path: 'deposit-transaction',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'DepositTransaction',
            meta: { title: 'Deposit Transaction' }
          },
          {
            path: 'loan-transaction',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'LoanTransaction',
            meta: { title: 'Loan Transaction' }
          },
          {
            path: 'financial-transaction',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'FinancialTransaction',
            meta: { title: 'Financial Transactions' }
          },
          {
            path: 'consumption-transaction',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ConsumptionTransaction',
            meta: { title: 'Consumption Transactions' }
          }
        ]
      },
      {
        path: 'payment-center',
        name: 'PaymentCenter',
        meta: { title: 'Payment Center' },
        children: [
          {
            path: 'cash-payment',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'CashPayment',
            meta: { title: 'Cash Payment' }
          },
          {
            path: 'balance-payment',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'BalancePayment',
            meta: { title: 'Balance Payment' }
          },
          {
            path: 'red-envelope',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'RedEnvelope',
            meta: { title: 'Red Envelope' }
          },
          {
            path: 'integral-payment',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'IntegralPayment',
            meta: { title: 'Integral Payment' }
          }
        ]
      },
      {
        path: 'marketing-center',
        name: 'MarketingCenter',
        meta: { title: 'Marketing Center' },
        children: [
          {
            path: 'luck-draw',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'LuckDraw',
            meta: { title: 'Luck Draw' }
          },
          {
            path: 'seckill',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Seckill',
            meta: { title: 'Seckill' }
          },
          {
            path: 'preferential',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Preferential',
            meta: { title: 'Preferential' }
          },
          {
            path: 'off',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Off',
            meta: { title: 'Off' }
          }
        ]
      },
      {
        path: 'clearing-center',
        name: 'ClearingCenter',
        meta: { title: 'Clearing Center' },
        children: [
          {
            path: 'reconciliation',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Reconciliation',
            meta: { title: 'Reconciliation' }
          },
          {
            path: 'liquidation',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Liquidation',
            meta: { title: 'Liquidation' }
          },
          {
            path: 'preferential',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Preferential',
            meta: { title: 'Preferential' }
          },
          {
            path: 'file-download',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'FileDownload',
            meta: { title: 'File Download' }
          },
          {
            path: 'result-download',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ResultDownload',
            meta: { title: 'Result Download' }
          }
        ]
      },
      {
        path: 'log-center',
        name: 'LogCenter',
        meta: { title: 'Log Center' },
        children: [
          {
            path: 'file-collection',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'FileCollection',
            meta: { title: 'File Collection' }
          },
          {
            path: 'data-cleaning',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'DataCleaning',
            meta: { title: 'Data Cleaning' }
          },
          {
            path: 'file-store',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'FileStore',
            meta: { title: 'File Store' }
          },
          {
            path: 'search',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Search',
            meta: { title: 'Search' }
          }
        ]
      },
      {
        path: 'configuration-center',
        name: 'ConfigurationCenter',
        meta: { title: 'Configuration Center' },
        children: [
          {
            path: 'parameter-subscription',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ParameterSubscription',
            meta: { title: 'Parameter Subscription' }
          },
          {
            path: 'change-monitoring',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ChangeMonitoring',
            meta: { title: 'Change Monitoring' }
          },
          {
            path: 'parameter-loading',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ParameterLoading',
            meta: { title: 'Parameter Loading' }
          },
          {
            path: 'parameter-download',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ParameterDownload',
            meta: { title: 'Parameter Download' }
          },
          {
            path: 'flexible-notice-receiving',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'FlexibleNoticeReceiving',
            meta: { title: 'Flexible Notice Receiving' }
          },
          {
            path: 'parameter-store',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ParameterStore',
            meta: { title: 'Parameter Store' }
          }
        ]
      },
      {
        path: 'user-center',
        name: 'UserCenter',
        meta: { title: 'User Center' },
        children: [
          {
            path: 'register-login',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'RegisterLogin',
            meta: { title: 'Register Login' }
          },
          {
            path: 'safety-core',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'SafetyCore',
            meta: { title: 'Safety Core' }
          },
          {
            path: 'session-management',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'SessionManagement',
            meta: { title: 'Session Management' }
          },
          {
            path: 'user-information-maintenance',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'UserInformationMaintenance',
            meta: { title: 'User Information Maintenance' }
          }
        ]
      },
      {
        path: 'account-center',
        name: 'AccountCenter',
        meta: { title: 'Account Center' },
        children: [
          {
            path: 'electronic-account-opening',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ElectronicAccountOpening',
            meta: { title: 'Electronic Account Opening' }
          },
          {
            path: 'add-account',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'AddAccount',
            meta: { title: 'Add Account' }
          },
          {
            path: 'binding-card',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'BindingCard',
            meta: { title: 'Binding Card' }
          },
          {
            path: 'user-information-maintenance',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'UserInformationMaintenance',
            meta: { title: 'User Information Maintenance' }
          }
        ]
      },
      {
        path: 'product-center',
        name: 'ProductCenter',
        meta: { title: 'Product Center' },
        children: [
          {
            path: 'product-template',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ProductTemplate',
            meta: { title: 'Product Template' }
          },
          {
            path: 'product-category',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ProductCategory',
            meta: { title: 'Product Category' }
          },
          {
            path: 'product-configuration',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ProductConfiguration',
            meta: { title: 'Product Configuration' }
          },
          {
            path: 'on-off-shelf',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'OnOffShelf',
            meta: { title: 'On Off Shelf' }
          }
        ]
      },
      {
        path: 'equity-center',
        name: 'EquityCenter',
        meta: { title: 'Equity Center' },
        children: [
          {
            path: 'equity-issue',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'EquityIssue',
            meta: { title: 'Equity Issue' }
          },
          {
            path: 'equity-consumption',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'EquityConsumption',
            meta: { title: 'Equity Consumption' }
          },
          {
            path: 'issuance-rules',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'IssuanceRules',
            meta: { title: 'Issuance Rules' }
          },
          {
            path: 'equity-cancellation',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'EquityCancellation',
            meta: { title: 'Equity Cancellation' }
          },
          {
            path: 'integral',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Integral',
            meta: { title: 'Integral' }
          },
          {
            path: 'coupon',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Coupon',
            meta: { title: 'Coupon' }
          }
        ]
      },
      {
        path: 'foundation-center',
        name: 'FoundationCenter',
        meta: { title: 'Foundation Center' },
        children: [
          {
            path: 'protocol-data',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'ProtocolData',
            meta: { title: 'Protocol Data' }
          },
          {
            path: 'business-data',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'BusinessData',
            meta: { title: 'Business Data' }
          },
          {
            path: 'system-parameter',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'SystemParameter',
            meta: { title: 'System Parameter' }
          },
          {
            path: 'public-data',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'PublicData',
            meta: { title: 'Public Data' }
          },
          {
            path: 'data-synchronization',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'DataSynchronization',
            meta: { title: 'Data Synchronization' }
          },
          {
            path: 'data-push',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'DataPush',
            meta: { title: 'Data Push' }
          }
        ]
      },
      {
        path: 'sequence-center',
        name: 'SequenceCenter',
        meta: { title: 'Sequence Center' },
        children: [
          {
            path: 'message-serial-number',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'MessageSerialNumber',
            meta: { title: 'Message Serial Number' }
          },
          {
            path: 'database-primary-key',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'DatabasePrimaryKey',
            meta: { title: 'Database Primary Key' }
          },
          {
            path: 'order-serial-number',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'OrderSerialNumber',
            meta: { title: 'Order Serial Number' }
          },
          {
            path: 'business-id',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'BusinessID',
            meta: { title: 'Business ID' }
          }
        ]
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
