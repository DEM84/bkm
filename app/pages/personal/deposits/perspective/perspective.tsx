import data from './perspective.json'
import parse from 'html-react-parser'

export const PerspectivePage = () => {
  return (
    <>
      {parse(data.content)}
    </>
  );
}
