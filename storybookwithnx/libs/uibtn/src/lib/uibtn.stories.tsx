import React from 'react';
import { Uibtn } from './uibtn';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Button',
  component: Uibtn,
} as ComponentMeta<typeof Uibtn>;

const Template: ComponentStory<typeof Uibtn> = (args) => <Uibtn {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  btnText: 'Logout',
  variant: 'contained',
  size: 'large',
  color: 'primary',
};
