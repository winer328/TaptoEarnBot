import { SDKProvider, useLaunchParams } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function ErrorBoundaryError({ error }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

/**
 * @returns {JSX.Element}
 */
function Inner() {
  const debug = useLaunchParams().startParam === "debug";

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <SDKProvider acceptCustomStyles debug={debug}>
      <Provider store={store}>
        <App />
      </Provider>
    </SDKProvider>
  );
}

/**
 * @returns {JSX.Element}
 */
export function Root() {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <Inner />
    </ErrorBoundary>
  );
}
