import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingPropsType} from "./Rating";
import {ValueType} from "../UncontrolledRaiting/UncontrolledRaiting";

export default {
    title: 'Component/Rating',
    component: Rating,
} as Meta;

const callback = action('enter on or off')
const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    onClick: callback
}
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: callback
}
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: callback
}
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: callback
}
export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    onClick: callback
}
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    onClick: callback
}


export const ChangeMode: Story<RatingPropsType> = (args) => {
    const [value, setValue] = useState<ValueType>(0)
    return <Rating value={value} onClick={setValue} />
}