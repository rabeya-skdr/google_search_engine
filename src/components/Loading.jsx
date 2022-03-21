import React from 'react';
import {Rings} from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
         <Rings color="#00BFFF" type="puff" height={540} width={80} />
    </div>
  )
}
