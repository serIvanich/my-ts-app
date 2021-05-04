import {Meta, Story} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff, UnOnOffPropsType} from "./UncontrolledOnOff";

export default {
    title: 'Component/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as Meta;

const callback = action('enter on or off')
const Template: Story<UnOnOffPropsType> = (args) => <UncontrolledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    defaultValue: true,
    onChange: callback
}
export const OffMode = Template.bind({});
OffMode.args = {
    defaultValue: false,
    onChange: callback
}



