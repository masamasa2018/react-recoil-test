// recoil/atoms.js

import { atom } from 'recoil';

// 状態のアトム（原子）を作成
export const countState = atom({
  key: 'countState', // ユニークなキー
  default: 0, // 初期値
});
