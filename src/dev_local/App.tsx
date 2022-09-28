import { HostEmulator } from 'react-sdk/host-emulator';
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import PluginMain from '../PluginMain';

const root = document.getElementById('root') as HTMLElement;

// It's for testing purposes only - the actual code will be called in Momentum host app
ReactDOM.render(
  <React.StrictMode>
    <HostEmulator>{({ sdk }) => <PluginMain sdk={sdk} />}</HostEmulator>
  </React.StrictMode>,
  root
);
