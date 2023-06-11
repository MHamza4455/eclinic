import { useEffect, useRef } from 'react';
import { APP_ID, SERVER_SECRET } from './constants';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
export default function App() {
  const roomID = 'Eclinic';

  useEffect(() => {
    const myMeeting = async (element:any) => {
      // const ZegoUIKitPrebuilt = await import('@zegocloud/zego-uikit-prebuilt');

      // generate Kit Token
      const appID = APP_ID;
      const serverSecret = SERVER_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        'Rizwan'
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
              window.location.protocol +
              '//' +
              window.location.host +
              window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showRemoveUserButton: true,
        showTurnOffRemoteCameraButton: true,
        showTurnOffRemoteMicrophoneButton: true,
      });
    };

    const element = document.getElementById('meeting-container');
    if (element) {
      myMeeting(element);
    }
  }, []);

  return <div id="meeting-container" style={{ width: '100vw', height: '100vh' }}></div>;
}
