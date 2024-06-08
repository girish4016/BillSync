import { Navigate } from "react-router-dom";

import { GroupsRoute } from "../constants/route-name";

export const HomeRoutes = () => {
  return <Navigate to={GroupsRoute}></Navigate>;
};
