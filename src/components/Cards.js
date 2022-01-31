
import React from 'react';
import styled from 'styled-components';

const Cards = ({ id, name, img }) => {

  const CardContainer = styled.button`
        background-image: url('${img}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 220px;
        height: 330px;
        padding: 48px, 25px;
        margin:24px;
        border:none;
        border-radius: 20px;
        & div{
          color: white;
          font-size: 1.5rem;
          background-color: rgba(49,59,93,1);
          opacity: 1;
          padding: 6px;
          opacity: 0.8;
          z-index: 1;
          position:relative;
          bottom: -35%;
          font-weight: bold;
        }
        
  `
  
  return <>
        <CardContainer id={id}>
            <div>                           
              <span>{name}</span>
            </div>
        </CardContainer>
  </>;
};

export default Cards;
