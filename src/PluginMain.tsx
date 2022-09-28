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
  }, [sdk]);

  return (
    <div style={{ border: '1px solid gray', padding: 10 }}>
      Plugin
      <pre>{JSON.stringify(sdk, null, 2)}</pre>
    </div>
  );
};

export default PluginMain;
