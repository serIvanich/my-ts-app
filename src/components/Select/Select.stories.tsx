import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType, VisibilityType} from "./Select";


export default {
    title: 'Component/Select',
    component: Select,
} as Meta;

const callback = action('want to change')
const Template: Story<SelectPropsType> = (args) => <Select {...args} />;


export const WorkingOptions = Template.bind({});
WorkingOptions.args = {
    items: [{id: '2', title: 'Olga', value: 5},
        {id: '3', title: 'Serik', value: 7},
        {id: '4', title: 'Gleb', value: 9}],
    value: 'fert',
    onChange: callback
}
// export const VisableOptions = Template.bind({});
//
// VisableOptions.args = {
//     items: [{id: '2', title: 'Olga', value: 5},
//         {id: '3', title: 'Serik', value: 7},
//         {id: '4', title: 'Gleb', value: 9}],
//     value: 'fert',
//     onChange: callback
// }


export const ChangeSelect: Story<SelectPropsType> = (args) => {
    const [myValue, setMyValue] = useState('value')
    return <Select items={
        [
            {id: '2', title: 'Olga', value: 5},
            {id: '3', title: 'Serik', value: 7},
            {id: '4', title: 'Gleb', value: 9}]} value={myValue} onChange={ setMyValue} />
}
