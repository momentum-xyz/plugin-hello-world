import { FC, useEffect } from 'react';
import { PluginSDKInterface } from 'react-sdk';

export interface PluginMainProps {
  sdk: PluginSDKInterface;
}

const PluginMain: FC<PluginMainProps> = ({ sdk }) => {
  useEffect(() => {
    sdk.events.on('test', (data: any) => {
      console.log('test event fired', data);
    });

    sdk.widgets.item = {
      icon: 'icon',
      tooltip: 'My Cool Plugin',
      onClick: () => {
        console.log("Clicked on my plugin's widget");
        alert("Clicked on my plugin's widget");
      },
    };

    sdk.init();
  }, [sdk]);

  return (
    <div style={{ border: '1px solid gray', padding: 10, margin: 10 }}>
      <h3>I'm a Plugin.</h3>
      <div>
        Current user:
        <pre>{JSON.stringify(sdk.currentUser, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PluginMain;
