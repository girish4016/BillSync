import { useState } from "react";
import { Button } from "./common/shadcn/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        tap to increase : {count}
      </Button>
    </div>
  );
}

export default App;
