import Journals from "./Journals";
import NewEntry from "./newEntry/NewEntry";

const JournalsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/ezone/journals",
      component: Journals,
    },
    {
      path: "/ezone/new-entry",
      component: NewEntry,
    },
  ],
};

export default JournalsConfig;

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
