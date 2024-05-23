import { useState } from "react";
import { Button } from "./common/shadcn/ui/button";

import { NavBar } from "./common/components/Navbar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar isHomePage={true} />
      <Button onClick={() => setCount((prev) => prev + 1)}>
        tap to increase : {count}
      </Button>
    </div>
  );
}

export default App;
