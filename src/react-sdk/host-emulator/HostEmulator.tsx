import { FC, ReactNode } from 'react';
import { PluginMainProps } from 'PluginMain';
import { PluginSDKInterface } from 'react-sdk';

const sdk: PluginSDKInterface = {
  currentUser: {
    id: '1',
    name: 'John Doe',
  },
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
};

interface Props {
  children: (props: PluginMainProps) => ReactNode;
}

export const HostEmulator: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>
        Tabs
        {['Dashboard', 'Stage', 'Calendar'].map((tab) => (
          <div key={tab}>{tab}</div>
        ))}
      </div>

      <div>{children({ sdk })}</div>

      <div>
        Widgets
        {['Share', 'Staking', 'Calendar', 'Player'].map((widget) => (
          <div key={widget}>{widget}</div>
        ))}
      </div>
    </div>
  );
};
