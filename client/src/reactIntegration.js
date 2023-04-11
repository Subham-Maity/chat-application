import React from "react";
import SDK from "./SDK";

function ReactIntegration() {
  function connectionListener(response) {
    if (response.status === "CONNECTED") {
      console.log("Connection Established");
    } else if (response.status === "DISCONNECTED") {
      console.log("Disconnected");
    }
  }
  const initSDK = async () => {
    const initializeObj = {
      apiBaseUrl: `API_URL`,
      licenseKey: `7CLjsomc3zXoMQ7Jq11IEOkyt83Yul`,
      isTrialLicenseKey: `TRIAL_MODE`,
      callbackListeners: {},
    };
    await SDK.initializeSDK(initializeObj);
  };

  return (
    <div>
      <button onClick={initSDK}>InittialzeSDK</button>
    </div>
  );
}
