


const ConnectyCube = require('connectycube');
let token = this.getToken();


    document.addEventListener('deviceready', () => {
        if (typeof device !== 'undefined') {
         
            firebaseSetup();
          
        }
      })

      function firebaseSetup() {
        
      
        // iOS device token
        FirebasePlugin.onApnsTokenReceived((apnsToken: any) => {
          console.log(apnsToken);
        }, (error: any) => {
          console.error(error);
        });
      
        FirebasePlugin.onMessageReceived((message: any) => {
          console.log(message);
        }, (error: any) => {
          console.error(error);
        });

      }
    function getToken () {
        let token = '';
         FirebasePlugin.getToken(function(fcmToken) {
             token = fcmToken;
         }, function(error) {
             console.error(error);
             return '';
         });
         return token;
    }
    

   
  FirebasePlugin.onTokenRefresh((fcmToken: any) => {
    if (getToken() && getToken().trim().length > 0) {
      subcribeToPushNotification(fcmToken);
    }
  }, (error: any) => {
    console.error(error);
  });




function subcribeToPushNotification(deviceToken: any) {
 
  const platform = "android";

  // https://stackoverflow.com/questions/51585819/how-to-detect-environment-in-a-cordova-android-application
  let IS_DEV_ENV;
  cordova.plugins.IsDebug.getIsDebug((isDebug: any) => {
    IS_DEV_ENV = isDebug;
  }, (err: any) => {
    console.error("cordova.plugins.IsDebug error", err);
  });

  const params = {
    // for iOS VoIP it should be 'apns_voip'
    notification_channel:  'gcm',
    device: {
      platform: platform,
      udid: device.uuid
    },
    push_token: {
      environment: IS_DEV_ENV ? 'development' : 'production',
      client_identification_sequence: deviceToken,
      bundle_identifier: "com.your.app.package.id"
    }
  }

  ConnectyCube.pushnotifications.subscriptions.create(params)
    .then((result: any) => {})
    .catch((error: any) => {});
}

const payload = JSON.stringify({
    message: "Alice is calling you",
    ios_badge: 1,
    // ios_voip: 1
  });
  
  // https://stackoverflow.com/questions/51585819/how-to-detect-environment-in-a-cordova-android-application
  let IS_DEV_ENV;
  
  cordova.plugins.IsDebug.getIsDebug(
    (isDebug: any) => {
      IS_DEV_ENV = isDebug;
    },
    (err: any) => {
      console.error("cordova.plugins.IsDebug error", err);
    }
  );
  
  const pushParameters = {
    notification_type: "push",
    user: { ids: [21, 12] }, // recipients.
    environment: IS_DEV_ENV ? "development" : "production",
    message: ConnectyCube.pushnotifications.base64Encode(payload),
  };
  
  // JS SDK v2+
  ConnectyCube.pushnotifications.events
    .create(pushParameters)
    .then((result: any) => {})
    .catch((error: any) => {});

    FirebasePlugin.onMessageReceived(
        (message: any) => {
          console.dir(message);
        },
        (error: any) => {}
      );
      



