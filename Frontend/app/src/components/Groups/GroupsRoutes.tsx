import { Outlet } from "react-router-dom";

import { GroupDetailsRoute, GroupsRoute } from "@/common/constants/route-name";
import { Groups } from "./components/Groups";
import { GroupDetails } from "./components/GroupDetails";

export const GroupsRoutes = [
  {
    path: GroupsRoute,
    element: <Outlet />,
    children: [
      { path: GroupDetailsRoute, element: <GroupDetails /> },
      { path: GroupsRoute, element: <Groups /> },
    ],
  },
];
