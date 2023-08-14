import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useState } from "react";
import { ROLES } from "../constants";

const Router = () => {
  const [role] = useState(ROLES.GUEST);
  const router = useRoutes(routes);
  return router;
};

export default Router;
