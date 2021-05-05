import {Meta, Story} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {DimychSelect, DimychSelectPropsType} from "./DimychSelect";


export default {
    title: 'Component/DimychSelect',
    component: DimychSelect,
} as Meta;

const callback = action('want to change')
const Template: Story<DimychSelectPropsType> = (args) => <DimychSelect {...args} />;


export const WithValue = Template.bind({});
WithValue.args = {
    items: [{title: 'Minsk', value: '1'},
        {title: 'Dnepr', value: '2'},
        {title: 'Kyiv', value: '3'}],
    value: '2',
    onChange: callback
}

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    items: [{title: 'Minsk', value: '1'},
        {title: 'Dnepr', value: '2'},
        {title: 'Kyiv', value: '3'}],
    onChange: callback
}
