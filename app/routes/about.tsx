import type { Route } from "./+types/home"
import DefaultPage from '../components/DefaultPage/DefaultPage'
import { AboutPage } from "../pages/about/about"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О банке" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutRoute() {
  return <>
    <DefaultPage>
      <AboutPage />
    </DefaultPage>
  </>
};
