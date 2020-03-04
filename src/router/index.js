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
    path: '/middle-end',
    component: Layout,
    redirect: '/middle-end/index',
    name:'MiddleEnd',
    meta: { title: 'Middle End', icon: 'all' },
    children: [
      {
        path: 'index',
        name: 'MiddleEnd',
        component: () => import('@/views/middleEnd/index'),
      },
      {
        path: 'trade-center',
        component: () => import('@/views/middleEnd/tradeCenter'),
        name: 'TradeCenter',
        meta: { title: 'Trade Center' },
        children: [
          {
            path: 'deposit-transaction',
            component: () => import('@/views/middleEnd/tradeCenter/depositTransaction'),
            name: 'DepositTransaction',
            meta: { title: 'Deposit Transaction' }
          },
          {
            path: 'loan-transaction',
            component: () => import('@/views/middleEnd/tradeCenter/loanTransaction'),
            name: 'LoanTransaction',
            meta: { title: 'Loan Transaction' }
          },
          {
            path: 'financial-transaction',
            component: () => import('@/views/middleEnd/tradeCenter/financialTransaction'),
            name: 'FinancialTransaction',
            meta: { title: 'Financial Transactions' }
          },
          {
            path: 'consumption-transaction',
            component: () => import('@/views/middleEnd/tradeCenter/consumptionTransaction'),
            name: 'ConsumptionTransaction',
            meta: { title: 'Consumption Transactions' }
          }
        ]
      },
      {
        path: 'payment-center',
        component: () => import('@/views/middleEnd/paymentCenter'),
        name: 'PaymentCenter',
        meta: { title: 'Payment Center' },
        children: [
          {
            path: 'cash-payment',
            component: () => import('@/views/middleEnd/paymentCenter/cashPayment'),
            name: 'CashPayment',
            meta: { title: 'Cash Payment' }
          },
          {
            path: 'balance-payment',
            component: () => import('@/views/middleEnd/paymentCenter/balancePayment'),
            name: 'BalancePayment',
            meta: { title: 'Balance Payment' }
          },
          {
            path: 'red-envelope',
            component: () => import('@/views/middleEnd/paymentCenter/redEnvelope'),
            name: 'RedEnvelope',
            meta: { title: 'Red Envelope' }
          },
          {
            path: 'integral-payment',
            component: () => import('@/views/middleEnd/paymentCenter/integralPayment'),
            name: 'IntegralPayment',
            meta: { title: 'Integral Payment' }
          }
        ]
      },
      {
        path: 'marketing-center',
        component: () => import('@/views/middleEnd/marketingCenter'),
        name: 'MarketingCenter',
        meta: { title: 'Marketing Center' },
        children: [
          {
            path: 'luck-draw',
            component: () => import('@/views/middleEnd/marketingCenter/luckDraw'),
            name: 'LuckDraw',
            meta: { title: 'Luck Draw' }
          },
          {
            path: 'seckill',
            component: () => import('@/views/middleEnd/marketingCenter/seckill'),
            name: 'Seckill',
            meta: { title: 'Seckill' }
          },
          {
            path: 'preferential',
            component: () => import('@/views/middleEnd/marketingCenter/preferential'),
            name: 'Preferential',
            meta: { title: 'Preferential' }
          },
          {
            path: 'off',
            component: () => import('@/views/middleEnd/marketingCenter/off'),
            name: 'Off',
            meta: { title: 'Off' }
          }
        ]
      },
      {
        path: 'clearing-center',
        component: () => import('@/views/middleEnd/clearingCenter'),
        name: 'ClearingCenter',
        meta: { title: 'Clearing Center' },
        children: [
          {
            path: 'reconciliation',
            component: () => import('@/views/middleEnd/clearingCenter/reconciliation'),
            name: 'Reconciliation',
            meta: { title: 'Reconciliation' }
          },
          {
            path: 'liquidation',
            component: () => import('@/views/middleEnd/clearingCenter/liquidation'),
            name: 'Liquidation',
            meta: { title: 'Liquidation' }
          },
          {
            path: 'preferential',
            component: () => import('@/views/middleEnd/clearingCenter/preferential'),
            name: 'Preferential',
            meta: { title: 'Preferential' }
          },
          {
            path: 'file-download',
            component: () => import('@/views/middleEnd/clearingCenter/fileDownload'),
            name: 'FileDownload',
            meta: { title: 'File Download' }
          },
          {
            path: 'result-download',
            component: () => import('@/views/middleEnd/clearingCenter/resultDownload'),
            name: 'ResultDownload',
            meta: { title: 'Result Download' }
          }
        ]
      },
      {
        path: 'log-center',
        component: () => import('@/views/middleEnd/logCenter'),
        name: 'LogCenter',
        meta: { title: 'Log Center' },
        children: [
          {
            path: 'file-collection',
            component: () => import('@/views/middleEnd/logCenter/fileCollection'),
            name: 'FileCollection',
            meta: { title: 'File Collection' }
          },
          {
            path: 'data-cleaning',
            component: () => import('@/views/middleEnd/logCenter/dataCleaning'),
            name: 'DataCleaning',
            meta: { title: 'Data Cleaning' }
          },
          {
            path: 'file-store',
            component: () => import('@/views/middleEnd/logCenter/fileStore'),
            name: 'FileStore',
            meta: { title: 'File Store' }
          },
          {
            path: 'search',
            component: () => import('@/views/middleEnd/logCenter/search'),
            name: 'Search',
            meta: { title: 'Search' }
          }
        ]
      },
      {
        path: 'configuration-center',
        component: () => import('@/views/middleEnd/configurationCenter'),
        name: 'ConfigurationCenter',
        meta: { title: 'Configuration Center' },
        children: [
          {
            path: 'parameter-subscription',
            component: () => import('@/views/middleEnd/configurationCenter/parameterSubscription'),
            name: 'ParameterSubscription',
            meta: { title: 'Parameter Subscription' }
          },
          {
            path: 'change-monitoring',
            component: () => import('@/views/middleEnd/configurationCenter/changeMonitoring'),
            name: 'ChangeMonitoring',
            meta: { title: 'Change Monitoring' }
          },
          {
            path: 'parameter-loading',
            component: () => import('@/views/middleEnd/configurationCenter/parameterLoading'),
            name: 'ParameterLoading',
            meta: { title: 'Parameter Loading' }
          },
          {
            path: 'parameter-download',
            component: () => import('@/views/middleEnd/configurationCenter/parameterDownload'),
            name: 'ParameterDownload',
            meta: { title: 'Parameter Download' }
          },
          {
            path: 'flexible-notice-receiving',
            component: () => import('@/views/middleEnd/configurationCenter/flexibleNoticeReceiving'),
            name: 'FlexibleNoticeReceiving',
            meta: { title: 'Flexible Notice Receiving' }
          },
          {
            path: 'parameter-store',
            component: () => import('@/views/middleEnd/configurationCenter/parameterStore'),
            name: 'ParameterStore',
            meta: { title: 'Parameter Store' }
          }
        ]
      },
      {
        path: 'user-center',
        component: () => import('@/views/middleEnd/userCenter'),
        name: 'UserCenter',
        meta: { title: 'User Center' },
        children: [
          {
            path: 'register-login',
            component: () => import('@/views/middleEnd/userCenter/registerLogin'),
            name: 'RegisterLogin',
            meta: { title: 'Register Login' }
          },
          {
            path: 'safety-core',
            component: () => import('@/views/middleEnd/userCenter/safetyCore'),
            name: 'SafetyCore',
            meta: { title: 'Safety Core' }
          },
          {
            path: 'session-management',
            component: () => import('@/views/middleEnd/userCenter/sessionManagement'),
            name: 'SessionManagement',
            meta: { title: 'Session Management' }
          },
          {
            path: 'user-information-maintenance',
            component: () => import('@/views/middleEnd/userCenter/userInformationMaintenance'),
            name: 'UserInformationMaintenance',
            meta: { title: 'User Information Maintenance' }
          }
        ]
      },
      {
        path: 'account-center',
        component: () => import('@/views/middleEnd/accountCenter'),
        name: 'AccountCenter',
        meta: { title: 'Account Center' },
        children: [
          {
            path: 'electronic-account-opening',
            component: () => import('@/views/middleEnd/accountCenter/electronicAccountOpening'),
            name: 'ElectronicAccountOpening',
            meta: { title: 'Electronic Account Opening' }
          },
          {
            path: 'add-account',
            component: () => import('@/views/middleEnd/accountCenter/addAccount'),
            name: 'AddAccount',
            meta: { title: 'Add Account' }
          },
          {
            path: 'binding-card',
            component: () => import('@/views/middleEnd/accountCenter/bindingCard'),
            name: 'BindingCard',
            meta: { title: 'Binding Card' }
          },
          {
            path: 'user-information-maintenance',
            component: () => import('@/views/middleEnd/accountCenter/userInformationMaintenance'),
            name: 'UserInformationMaintenance',
            meta: { title: 'User Information Maintenance' }
          }
        ]
      },
      {
        path: 'product-center',
        component: () => import('@/views/middleEnd/productCenter'),
        name: 'ProductCenter',
        meta: { title: 'Product Center' },
        children: [
          {
            path: 'product-template',
            component: () => import('@/views/middleEnd/productCenter/productTemplate'),
            name: 'ProductTemplate',
            meta: { title: 'Product Template' }
          },
          {
            path: 'product-category',
            component: () => import('@/views/middleEnd/productCenter/productCategory'),
            name: 'ProductCategory',
            meta: { title: 'Product Category' }
          },
          {
            path: 'product-configuration',
            component: () => import('@/views/middleEnd/productCenter/productConfiguration'),
            name: 'ProductConfiguration',
            meta: { title: 'Product Configuration' }
          },
          {
            path: 'on-off-shelf',
            component: () => import('@/views/middleEnd/productCenter/onOffShelf'),
            name: 'OnOffShelf',
            meta: { title: 'On Off Shelf' }
          }
        ]
      },
      {
        path: 'equity-center',
        component: () => import('@/views/middleEnd/equityCenter'),
        name: 'EquityCenter',
        meta: { title: 'Equity Center' },
        children: [
          {
            path: 'equity-issue',
            component: () => import('@/views/middleEnd/equityCenter/equityIssue'),
            name: 'EquityIssue',
            meta: { title: 'Equity Issue' }
          },
          {
            path: 'equity-consumption',
            component: () => import('@/views/middleEnd/equityCenter/equityConsumption'),
            name: 'EquityConsumption',
            meta: { title: 'Equity Consumption' }
          },
          {
            path: 'issuance-rules',
            component: () => import('@/views/middleEnd/equityCenter/issuanceRules'),
            name: 'IssuanceRules',
            meta: { title: 'Issuance Rules' }
          },
          {
            path: 'equity-cancellation',
            component: () => import('@/views/middleEnd/equityCenter/equityCancellation'),
            name: 'EquityCancellation',
            meta: { title: 'Equity Cancellation' }
          },
          {
            path: 'integral',
            component: () => import('@/views/middleEnd/equityCenter/integral'),
            name: 'Integral',
            meta: { title: 'Integral' }
          },
          {
            path: 'coupon',
            component: () => import('@/views/middleEnd/equityCenter/coupon'),
            name: 'Coupon',
            meta: { title: 'Coupon' }
          }
        ]
      },
      {
        path: 'foundation-center',
        component: () => import('@/views/middleEnd/foundationCenter'),
        name: 'FoundationCenter',
        meta: { title: 'Foundation Center' },
        children: [
          {
            path: 'protocol-data',
            component: () => import('@/views/middleEnd/foundationCenter/protocolData'),
            name: 'ProtocolData',
            meta: { title: 'Protocol Data' }
          },
          {
            path: 'business-data',
            component: () => import('@/views/middleEnd/foundationCenter/businessData'),
            name: 'BusinessData',
            meta: { title: 'Business Data' }
          },
          {
            path: 'system-parameter',
            component: () => import('@/views/middleEnd/foundationCenter/systemParameter'),
            name: 'SystemParameter',
            meta: { title: 'System Parameter' }
          },
          {
            path: 'public-data',
            component: () => import('@/views/middleEnd/foundationCenter/publicData'),
            name: 'PublicData',
            meta: { title: 'Public Data' }
          },
          {
            path: 'data-synchronization',
            component: () => import('@/views/middleEnd/foundationCenter/dataSynchronization'),
            name: 'DataSynchronization',
            meta: { title: 'Data Synchronization' }
          },
          {
            path: 'data-push',
            component: () => import('@/views/middleEnd/foundationCenter/dataPush'),
            name: 'DataPush',
            meta: { title: 'Data Push' }
          }
        ]
      },
      {
        path: 'sequence-center',
        component: () => import('@/views/middleEnd/sequenceCenter'),
        name: 'SequenceCenter',
        meta: { title: 'Sequence Center' },
        children: [
          {
            path: 'message-serial-number',
            component: () => import('@/views/middleEnd/sequenceCenter/messageSerialNumber'),
            name: 'MessageSerialNumber',
            meta: { title: 'Message Serial Number' }
          },
          {
            path: 'database-primary-key',
            component: () => import('@/views/middleEnd/sequenceCenter/databasePrimaryKey'),
            name: 'DatabasePrimaryKey',
            meta: { title: 'Database Primary Key' }
          },
          {
            path: 'order-serial-number',
            component: () => import('@/views/middleEnd/sequenceCenter/orderSerialNumber'),
            name: 'OrderSerialNumber',
            meta: { title: 'Order Serial Number' }
          },
          {
            path: 'business-id',
            component: () => import('@/views/middleEnd/sequenceCenter/businessID'),
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
