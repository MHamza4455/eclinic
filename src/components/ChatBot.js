import React, { Component } from "react";

export class ChatBot extends Component {
  componentDidMount() {
    // @ts-ignore
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3d73a913a2371a27007213d8c8226f46f",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      // @ts-ignore
      h.appendChild(s);
      // @ts-ignore
      window.kommunicate = m;
      m._globals = kommunicateSettings;
      // @ts-ignore
    })(document, window.kommunicate || {});
  }
  render() {
    return <div></div>;
  }
}

export default ChatBot;
