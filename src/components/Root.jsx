import { setDebug } from '@tma.js/sdk';
import { DisplayGate, SDKProvider, useLaunchParams } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { useEffect, useMemo } from 'react';

import { App } from '~/components/App.jsx';
import { ErrorBoundary } from '~/components/ErrorBoundary.jsx';

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function DisplayError({ error }) {
  return (
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : JSON.stringify(error)}
      </code>
    </blockquote>
  );
}

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function ErrorBoundaryError({ error }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <DisplayError error={error} />
    </div>
  );
}

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function ErrorBoundarySDK({ error }) {
  return (
    <div>
      <p>
        An error occurred while initializing the SDK. You are probably running the application
        outside of Telegram (in usual browser, for example).
      </p>
      <DisplayError error={error} />
    </div>
  );
}

/**
 * @returns {JSX.Element}
 */
function Loading() {
  return <div>Application is loading</div>;
}

/**
 * @returns {JSX.Element}
 */
export function Inner() {
  const launchParams = useLaunchParams();

  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (launchParams.startParam === 'debug') {
      setDebug(true);
      import('eruda').then((lib) => lib.default.init());
    }
  }, [launchParams]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <DisplayGate error={ErrorBoundarySDK} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
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
