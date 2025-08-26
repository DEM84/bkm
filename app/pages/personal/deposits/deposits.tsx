import data from './deposits.json'
import parse from 'html-react-parser'

export const DepositsPage = () => {
  return (
    <>
      {parse(data.content)}
    </>
  );
}
