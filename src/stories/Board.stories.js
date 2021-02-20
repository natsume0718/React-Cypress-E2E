import React from 'react';

import Board from '../components/board';
import { Piece } from '../components/Piece';

let component = {
  title: 'Board',
  component: Board,
};

export default component;

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(11).fill(null),
  onClick: () => {}
};
export const allRound = Template.bind({});
allRound.args = {
  squares: Array(11).fill(Piece.round),
  onClick: () => {}
};

export const allCross = Template.bind({});
allCross.args = {
  squares: Array(11).fill(Piece.cross),
  onClick: () => {}
};
