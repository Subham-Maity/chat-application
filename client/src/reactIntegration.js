import React from "react";
import SDK from "./SDK";
import {
  FaUser,
  FaUserPlus,
  FaUserSlash,
  FaLock,
  FaRegPaperPlane,
  FaUserAlt,
  FaStopCircle,
  FaBan,
  FaUnlockAlt,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";

//Button For Operations

// React Integration
function ReactIntegration() {
  function connectionListener(response) {
    if (response.status === "CONNECTED") {
      console.log("Connection Established");
    } else if (response.status === "DISCONNECTED") {
      console.log("Disconnected");
    }
  }

  //User Profile Details Listener
  const userProfileListener = async (res) => {
    console.log("User Profile Listener", res);
  };

  // Initialize SDK
  const initSDK = async () => {
    const initializeObj = {
      apiBaseUrl: `https://api-preprod-sandbox.mirrorfly.com/api/v1`,
      licenseKey: `7CLjsomc3zXoMQ7Jq11IEOkyt83Yul`,
      isTrialLicenseKey: `TRIAL_MODE`,
      callbackListeners: {
        connectionListener,
        messageListener,
        userProfileListener,
      },
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

  //get user profile details
  const getUserProfile = async () => {
    const toUserJid = SDK.getJid("8985454546");
    let profileDetails = await SDK.getUserProfile(toUserJid.userJid);
    console.log("Profile Details", profileDetails);
  };

  //Last Seen Time
  const LastSeen = async () => {
    const userJid = SDK.getJid("8985454546");
    let lastSeen = await SDK.getLastSeen(userJid.userJid);
    console.log("Last Seen", lastSeen);
  };

  //block user
  const BlockUser = async () => {
    const userJid = SDK.getJid("8985454546");
    let blockUser = await SDK.blockUser(userJid.userJid);
    console.log("Block User", blockUser);
  };

  //Unblock User
  const UnblockUser = async () => {
    const userJid = SDK.getJid("8985454546");
    let unblockUser = await SDK.unblockUser(userJid.userJid);
    console.log("Unblock User", unblockUser);
  };
  //Get User I Blocked
  const GetUserIBlocked = async () => {
    let userIBlocked = await SDK.getUsersIBlocked();
    console.log("User I Blocked", userIBlocked);
  };

  //Button For Operations
  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold p-4">dev-subham</h1>
      <div className="p-4 max-w-md mx-auto bg-gray-800 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={initSDK}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaUser />
            <span className="ml-2">Init SDK</span>
          </button>
          <button
            onClick={registerUser}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaUserPlus />
            <span className="ml-2">Register User</span>
          </button>
          <button
            onClick={() => userLogin(userName, password)}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaLock />
            <span className="ml-2">User Login</span>
          </button>
          <button
            onClick={textMessage}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaRegPaperPlane />
            <span className="ml-2">Send Message</span>
          </button>
          <button
            onClick={getUserProfile}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaUserAlt />
            <span className="ml-2">Get User Profile</span>
          </button>
          <button
            onClick={LastSeen}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaStopCircle />
            <span className="ml-2">Last Seen</span>
          </button>
          <button
            onClick={BlockUser}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaBan />
            <span className="ml-2">Block User</span>
          </button>
          <button
            onClick={GetUserIBlocked}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaUserSlash />
            <span className="ml-2">Get User I Blocked</span>
          </button>

          <button
            onClick={UnblockUser}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaUnlockAlt />
            <span className="ml-2">Unblock User</span>
          </button>
          <button
            onClick={LogOut}
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            <FaSignOutAlt />
            <span className="ml-2">Logout</span>
          </button>
        </div>
      </div>
      <div className="p-4 m-5 max-w-md mx-auto bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <FaQuestionCircle className="text-purple-600 mr-2" />
          <h2 className="text-lg font-bold text-white">FAQ</h2>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          This UI is for SDK testing purposes only. Please open your console to
          test the functionality. The backend is the main purpose of this
          application.
        </p>
      </div>
    </div>
  );
}

export default ReactIntegration;
