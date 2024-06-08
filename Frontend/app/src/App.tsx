import { useRoutes } from "react-router-dom";
import { HomeRoute } from "./common/constants/route-name";
import { HomeRoutes } from "./common/routes/HomeRoutes";
import { GroupsRoutes } from "./components/Groups/GroupsRoutes";
import { FriendsRoutes } from "./components/Friends/FriendsRoutes";
import { ExpensesRoutes } from "./components/Expenses/ExpensesRoutes";

function App() {
  const routes = useRoutes([
    { path: HomeRoute, element: <HomeRoutes /> },
    ...GroupsRoutes,
    ...FriendsRoutes,
    ...ExpensesRoutes,
  ]);

  return <div>{routes}</div>;
}

export default App;
