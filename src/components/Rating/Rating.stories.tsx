
import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Component/OnOff',
    component: OnOff,
} as Meta;

const callback = action('enter on or off')
const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const OnIsTrue = Template.bind({});
OnIsTrue.args = {
    onOff: true,
    onChange: callback
}
export const OnIsFalse = Template.bind({});
OnIsFalse.args = {
    onOff: false,
    onChange: callback
}
export const ChangeMode: Story<OnOffPropsType> = (args) => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff onOff={on} onChange={setOn} />
}