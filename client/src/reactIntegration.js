import React from "react";
import SDK from "./SDK";

function ReactIntegration() {
  const initSDK = async () => {
    const initializeObj = {
      apiBaseUrl: `API_URL`,
      licenseKey: `LICENSE_KEY`,
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
