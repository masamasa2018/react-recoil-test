// recoil/components/Display.js

import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from '../atoms';

const Display = () => {
  // countStateの値を取得
  const count = useRecoilValue(countState);

  return (
    <div>
      <h2>Display</h2>
      <p>Count from Display: {count}</p>
    </div>
  );
};

export default Display;
