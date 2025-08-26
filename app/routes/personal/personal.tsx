import type { Route } from "../+types/home"
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import { PersonalPage } from "../../pages/personal/personal"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Частным лицам" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PersonalRoute() {
  return <>
    <DefaultPage>
      <PersonalPage />
    </DefaultPage>
  </>
};
