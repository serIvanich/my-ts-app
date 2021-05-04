import {Meta, Story} from "@storybook/react";
import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledRating, UnRatingPropsType} from ".//UncontrolledRaiting";

export default {
    title: 'Component/UncontroledRating',
    component: UncontrolledRating,
} as Meta;

const callback = action('rating changed inside component')
const Template: Story<UnRatingPropsType> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue: 0,
    onChange: callback
}
export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
    onChange: callback
}
export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
    onChange: callback
}
export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
    onChange: callback
}
export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4,
    onChange: callback
}
export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5,
    onChange: callback
}


