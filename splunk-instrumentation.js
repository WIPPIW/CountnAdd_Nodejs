// splunk-instrumentation.js

import SplunkOtelWeb from '@splunk/otel-web';
import SplunkSessionRecorder from '@splunk/otel-web-session-recorder';

// Initialize Splunk RUM
SplunkOtelWeb.init({
   realm: "jp0",
   rumAccessToken: "uAo-ZCU0dYh4RuI1I_l3LQ",
   applicationName: "count-add-app",
   deploymentEnvironment: "count-app"
});

// Initialize Splunk Session Recorder
SplunkSessionRecorder.init({
   realm: "jp0",
   rumAccessToken: "uAo-ZCU0dYh4RuI1I_l3LQ"
});
