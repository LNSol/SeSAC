import axios from 'axios';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 320px;
  position: relative;
  overflow: hidden;
  background: rgb(191, 191, 191, 0.5);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const ImageList = styled.ul`
  box-sizing: border-box;
  list-style: none;
  padding-left: 0;
  height: 100%;
  position: absolute;
  top: -16px;
  display: flex;
  transition: 0.4s ease-out;
`;

const ImageItem = styled.li`
  box-sizing: border-box;
  width: 500px;
  height: 320px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PrevButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  top: 46%;
  border-radius: 50%;
  border: none;
  z-index: 999;
  background: rgba(0, 0,0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    font-size: 1.4rem;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  top: 46%;
  border-radius: 50%;
  border: none;
  z-index: 999;
  background: rgba(0, 0,0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    font-size: 1.4rem;
    background: rgba(0, 0, 0, 0.8);
  }
`;


const PostImageSlider = ({ postImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [left, setLeft] = useState(0);

  const onClickPrev = () => {
    setCurrentIndex(index => index === 0 ? index : index - 1);
    if (currentIndex !== 0) setLeft(prev => prev + 500);
  };
  const onClickNext = () => {
    setCurrentIndex(index => index === postImages.length -1 ? index : index + 1);
    if (currentIndex !== postImages.length - 1) setLeft(prev => prev - 500);
  };

  return (
    <Box>
      <PrevButton onClick={onClickPrev}>{'<'}</PrevButton>
      <NextButton onClick={onClickNext}>{'>'}</NextButton>
      <ImageList style={{left}}>
        {postImages.map((image, index) => (
          <ImageItem key={index}>
            <Image src={`http://localhost:4000/posts/upload/upload/${image}`} />
          </ImageItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default PostImageSlider;