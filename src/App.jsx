import { useEffect, useState } from "react";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";

function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-fuchsia-500 to-teal-600 h-dvh">
      {isLoading ? <Skeleton /> : <Card />}
    </div>
  );
}

export default App;
