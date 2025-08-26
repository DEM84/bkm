import type { Route } from "../../+types/home"
import DefaultPage from '../../../components/DefaultPage/DefaultPage'
import { DepositsPage } from "../../../pages/personal/deposits/deposits"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Частным лицам" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PersonalRoute() {
  return <>
    <DefaultPage>
      <DepositsPage />
    </DefaultPage>
  </>
};
