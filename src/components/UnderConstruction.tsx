import React from 'react';
import './UnderConstruction.css';
import { Box } from '@mui/material';

const UnderConstruction: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <div className='underConstructionContainer'>
        <div className='object'>
          <div className='object-rope'></div>
          <div className='object-shape'>
            Under <span className='soon'>Construction</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UnderConstruction;
