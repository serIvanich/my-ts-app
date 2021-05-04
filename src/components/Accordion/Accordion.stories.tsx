import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

const getCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Component/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            // control: 'color',
            ...getCategoryObj('Color')
        },
        onChange: {
            ...getCategoryObj('Event')
        },
        onClick: {
            ...getCategoryObj('Event')
        },
        items: {...getCategoryObj('Main')},
        collapsed: {...getCategoryObj('Main')},
        titleValue: {...getCategoryObj('Main')},
    }
} as Meta;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'MENU',
    collapsed: true,
    items: [],
}
export const UserUncollapsedMode = Template.bind({});
UserUncollapsedMode.args = {
    ...callbackProps,
    titleValue: 'USER',
    collapsed: false,
    items: [{title: 'Valera', value: 1},
        {title: 'Olga', value: 2},
        {title: 'Serik', value: 3},
        {title: 'Gleb', value: 4}],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion {...args} collapsed={collapsed}
                      onChange={() => setCollapsed(!collapsed)}
    />
}
ModeChanging.args = {
    titleValue: 'user',
    items: [{title: 'Valera', value: 1},
        {title: 'Olga', value: 2},
        {title: 'Serik', value: 3},
        {title: 'Gleb', value: 4}],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }

}