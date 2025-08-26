import type { Route } from "../../../+types/home"
import DefaultPage from '../../../../components/DefaultPage/DefaultPage'
import { PerspectivePage } from "../../../../pages/personal/deposits/perspective/perspective"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Вклад Перспектива" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PerspectiveRoute() {
  return <>
    <DefaultPage>
      <PerspectivePage />
    </DefaultPage>
  </>
};
