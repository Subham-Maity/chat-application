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
      apiBaseUrl: `https://api-preprod-sandbox.mirrorfly.com/api/v1`,
      licenseKey: `7CLjsomc3zXoMQ7Jq11IEOkyt83Yul`,
      isTrialLicenseKey: `TRIAL_MODE`,
      callbackListeners: { connectionListener },
    };

    let initSDKResponse = await SDK.initializeSDK(initializeObj);
    console.log("initSDKResponse", initSDKResponse);
  };

  let userName = "";
  let password = "";
  const registerUser = async () => {
    let userRegisteration = await SDK.register(`123456789`); //123456789
    console.log(userRegisteration);
  };
  return (
    <div>
      <button onClick={initSDK}>InittialzeSDK</button>
    </div>
  );
}

export default ReactIntegration;
