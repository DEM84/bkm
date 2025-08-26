import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/personal", "routes/personal/personal.tsx"),
    route("/personal/deposits", "routes/personal/deposits/deposits.tsx"),
    route("/personal/deposits/perspective", "routes/personal/deposits/perspective/perspective.tsx"),
    route("/news", "routes/news.tsx"),
] satisfies RouteConfig;
