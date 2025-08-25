import React from "react";

export const Info = (props: { content: any; }) => {
  return (
    <>{ props.content || 'заглушка' }</>
  );
}
