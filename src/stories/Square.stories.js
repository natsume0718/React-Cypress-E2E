import React from 'react';

import Square from '../components/squre';
import { Piece } from '../components/Piece';


export default {
  title: 'Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};

export const Round = Template.bind({});
Round.args = {
  value: Piece.round,
};

export const Cross = Template.bind({});
Cross.args = {
  value: Piece.cross,
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: '△',
};
