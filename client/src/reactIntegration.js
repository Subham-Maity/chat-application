import React from "react";
import SDK from "./SDK";

// React Integration
function ReactIntegration() {
  function connectionListener(response) {
    if (response.status === "CONNECTED") {
      console.log("Connection Established");
    } else if (response.status === "DISCONNECTED") {
      console.log("Disconnected");
    }
  }
  // Initialize SDK
  const initSDK = async () => {
    const initializeObj = {
      apiBaseUrl: `https://api-preprod-sandbox.mirrorfly.com/api/v1`,
      licenseKey: `7CLjsomc3zXoMQ7Jq11IEOkyt83Yul`,
      isTrialLicenseKey: `TRIAL_MODE`,
      callbackListeners: { connectionListener, messageListener },
    };

    let initSDKResponse = await SDK.initializeSDK(initializeObj);
    console.log("initSDKResponse", initSDKResponse);
  };

  let userName = "";
  let password = "";

  // Register new user
  const registerUser = async () => {
    let userRegisteration = await SDK.register(`8985454546`); //123456789
    console.log(userRegisteration);
    userName = userRegisteration.data.username;
    password = userRegisteration.data.password;
  };

  // Login user
  const userLogin = async () => {
    let login = await SDK.connect(userName, password);
    console.log(login);
  };

  //LOGOUT USER
  const LogOut = async () => {
    let userLoggedOut = await SDK.logout();
    console.log(`LoggedOutStatus: ${userLoggedOut}`);
  };

  //SEND TEXT MESSAGE
  const textMessage = async () => {
    let msg = "Message from Integration";
    let username = "8985454546"; // Replace this with the actual username
    let xmppSocketHost = "example.com"; // Replace this with the actual xmppSocketHost
    let toUserJid = username + "@" + xmppSocketHost;
    let textMsg = await SDK.sendTextMessage(toUserJid, msg);
    console.log(textMsg);
  };
  //Recieve Text Message
  function messageListener(response) {
    console.log("Message Listener", response);
  }

  //Button For Operations
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold p-4">dev-subham</h1>
      <div className="p-4 max-w-md mx-auto bg-gray-800 rounded-lg shadow-md">
        <button
          onClick={initSDK}
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-2 shadow-md"
        >
          Initialize SDK
        </button>
        <button
          onClick={registerUser}
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-2 shadow-md"
        >
          Register
        </button>
        <button
          onClick={() => userLogin(userName, password)}
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-2 shadow-md"
        >
          Login
        </button>

        <button
          onClick={LogOut}
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-4 rounded w-full mb-2 shadow-md"
        >
          Logout
        </button>

        <button
          onClick={textMessage}
          className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-900 hover:to-purple-700 text-white font-bold py-2 px-4 rounded w-full shadow-md"
        >
          Send Text Message
        </button>
      </div>
    </div>
  );
}

export default ReactIntegration;
