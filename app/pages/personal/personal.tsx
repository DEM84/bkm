import data from './personal.json'
import parse from 'html-react-parser'

export const PersonalPage = () => {
  return (
    <>
      <h2 className='text-3xl'>{data.title}</h2>
      
      {parse(data.content)}
    </>
  );
}
