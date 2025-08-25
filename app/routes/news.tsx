import type { Route } from "./+types/home";
import { Info } from "../pages/info/info";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Новости банка" },
    { name: "description", content: "Нооовости описание" },
  ];
}

export default function NewsRoute() {
  return <Info content="контент новостей" />
};
