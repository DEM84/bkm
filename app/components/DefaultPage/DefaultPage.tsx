const DefaultPage = (props: any) => {
  return (
    <div className='pt-16 pb-16'>
      <hr />
      {props.children}
      <hr />
    </div>
  )
}

export default DefaultPage