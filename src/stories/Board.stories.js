import React from 'react';

import Board from '../components/board';
import '../index.css';
import { Piece } from '../components/Piece';

export default {
  title: 'Board',
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
  onClick: () => {}
};
export const allRound = Template.bind({});
allRound.args = {
  squares: Array(9).fill(Piece.round),
  onClick: () => {}
};

export const allTriangle = Template.bind({});
allTriangle.args = {
  squares: Array(9).fill('△'),
  onClick: () => {}
};

export const allCross = Template.bind({});
allCross.args = {
  squares: Array(9).fill(Piece.cross),
  onClick: () => {}
};
