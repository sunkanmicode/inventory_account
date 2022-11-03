import Banking from "./Banking";


const BankingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/banking",
      component: Banking,
    },
  ],
};

export default BankingConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
