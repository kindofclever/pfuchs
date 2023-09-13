import { Meta } from '@storybook/react';
import CustomButton, { CustomButtonProps } from './CustomButton';

type CustomButtonTemplate = typeof Template & {
  args?: Partial<CustomButtonProps>;
};

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    btnType: {
      control: {
        type: 'select',
        options: ['action', 'normal', 'faded'],
      },
      defaultValue: 'normal',
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template = (args: CustomButtonProps) => (
  <CustomButton {...args}>Button</CustomButton>
);

export const Action: CustomButtonTemplate = Template.bind({});
Action.args = {
  btnType: 'action',
};

export const Normal: CustomButtonTemplate = Template.bind({});
Normal.args = {
  btnType: 'normal',
};

export const Faded: CustomButtonTemplate = Template.bind({});
Faded.args = {
  btnType: 'faded',
};
