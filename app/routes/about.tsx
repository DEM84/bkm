import type { Route } from "./+types/home";
import { Info } from "../pages/info/info";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ABOUT" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function About() {
  return <Info />
};
