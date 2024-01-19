import "./App.css";
import SignupForm from "./components/SignupForm/SignupForm";
import { Suspense } from "react";

function App() {
  return <SignupForm />;
}

export default function WrapperApp() {
  return (
      <Suspense fallback="...loading">
        <App/>
      </Suspense>
  )
}