import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'Component/Accordion',
    component: Accordion,
} as Meta;

const callback = action('collapsed true or false')
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedIsTrue = Template.bind({});
CollapsedIsTrue.args = {
    titleValue: 'MENU',
    collapsed: true,
    onChange: callback
}
export const CollapsedIsFalse = Template.bind({});
CollapsedIsFalse.args = {
    titleValue: 'USER',
    collapsed: false,
    onChange: callback
}

export const ChangeMode: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion titleValue={'user'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)} />
}