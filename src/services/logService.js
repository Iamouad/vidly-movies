// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
    // Sentry.init({
    //     dsn: "https://96741e23a9af4263857f5ddb8548c858@o565123.ingest.sentry.io/5706362",
    //     integrations: [new Integrations.BrowserTracing()],
      
    //     // Set tracesSampleRate to 1.0 to capture 100%
    //     // of transactions for performance monitoring.
    //     // We recommend adjusting this value in production
    //     tracesSampleRate: 1.0,
    //   });
}

function log(error){
    //Sentry.captureException(error)
}

export default{
    init,
    log
}