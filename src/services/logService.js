import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://d98ffbaa7e034f8a88c18b6b28108e1e@o565123.ingest.sentry.io/5712921",
        integrations: [new Integrations.BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}

function log(error){
    Sentry.captureException(error)
}

export default{
    init,
    log
}