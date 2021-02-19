import { Switch, Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { restoreUser } from "./store/session";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
