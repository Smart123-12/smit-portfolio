import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.jsx';

// Mock minimal browser globals for SSR rendering
globalThis.window = {
  scrollY: 0,
  addEventListener: () => {},
  removeEventListener: () => {},
};

try {
  console.log("Starting diagnostic React render...");
  const html = ReactDOMServer.renderToString(React.createElement(App));
  console.log("✅ Success! App rendered successfully without crashes. Output length:", html.length);
} catch (err) {
  console.error("❌ Render crash detected:");
  console.error(err);
}
