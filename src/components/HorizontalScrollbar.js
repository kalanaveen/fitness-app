import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return <Typography onClick={() => scrollPrev()}>Left</Typography>;
};

const RightArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return <Typography onClick={() => scrollPrev()}>Right</Typography>;
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  console.log(data);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
       {data.map(item)}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
