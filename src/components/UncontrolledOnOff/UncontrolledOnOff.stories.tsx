import {Meta, Story} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontroledOnOff, UnOnOffPropsType} from "./UncontroledOnOff";

export default {
    title: 'Component/UncontroledOnOff',
    component: UncontroledOnOff,
} as Meta;

const callback = action('enter on or off')
const Template: Story<UnOnOffPropsType> = (args) => <UncontroledOnOff {...args} />;

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



