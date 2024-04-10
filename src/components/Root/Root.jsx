import { setDebug } from '@tma.js/sdk';
import { DisplayGate, SDKProvider, useLaunchParams } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { useEffect, useMemo } from 'react';

import { App } from '~/components/App/App.jsx';

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function Err({ error }) {
  return (
    <div>
      <p>An error occurred while initializing the SDK</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

/**
 * @returns {JSX.Element}
 */
function Loading() {
  return (
    <div>Application is loading</div>
  );
}

/**
 * @returns {JSX.Element}
 */
export function Root() {
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
        <DisplayGate error={Err} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}
