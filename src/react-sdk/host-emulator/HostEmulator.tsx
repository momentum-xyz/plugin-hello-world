import { FC, ReactNode, useMemo, useState } from 'react';
import { PluginMainProps } from 'PluginMain';
import { PluginSDKInterface, WidgetItem } from 'react-sdk';

interface PluginSDKInternalInterface {
  _onInit?: () => void;
}

const initialSDK: PluginSDKInterface & PluginSDKInternalInterface = {
  currentUser: {
    id: '1',
    name: 'John Doe',
  },
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  widgets: {},

  init() {
    this._onInit?.();
  },
};

interface Props {
  children: (props: PluginMainProps) => ReactNode;
}

export const HostEmulator: FC<Props> = ({ children }) => {
  // temp
  const [sdk, setSdk] = useState<PluginSDKInterface | null>(null);
  initialSDK._onInit = () => {
    console.log('Plugin INIT');
    setSdk(initialSDK);
  };

  const widgets: WidgetItem[] = useMemo(() => {
    if (!sdk) return [];

    const widgets: WidgetItem[] = [
      'Share',
      'Staking',
      'Calendar',
      'Player',
    ].map((tooltip) => ({
      icon: 'n/a',
      tooltip,
      onClick: () => {
        console.log('Clicked on widget', tooltip);
      },
    }));
    if (sdk.widgets.item) {
      widgets.push(sdk.widgets.item);
    }

    return sdk.widgets.extendList?.(widgets) ?? widgets;
  }, [sdk]);

  return (
    <div>
      <div>
        Tabs
        {['Dashboard', 'Stage', 'Calendar'].map((tab) => (
          <div key={tab}>{tab}</div>
        ))}
      </div>

      <div>{children({ sdk: initialSDK })}</div>

      <div>
        Widgets
        {widgets.map((widget) => (
          <button key={widget.tooltip} onClick={widget.onClick}>
            {widget.tooltip}
          </button>
        ))}
      </div>
    </div>
  );
};
