import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { useRef, useEffect } from "react";
import Navigation from "./src/components/Navigation";
import { registerForPushNotificationsAsync } from "./src/lib/notification";

function App() {
 
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
