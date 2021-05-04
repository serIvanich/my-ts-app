import {Meta, Story} from "@storybook/react";
import React from "react";
import {UncontrolledAccordion, UncontrolledAccordionPropsType} from "./UncontrolledAccordion";


export default {
    title: 'Component/UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        fontSize: {
            table: {
                category: 'Size'
            }
        }
    }
} as Meta;


export const ModeChanging: Story<UncontrolledAccordionPropsType> = (args) => {

    return <UncontrolledAccordion {...args} />
}
ModeChanging.args = {
    titleValue: 'Users'
}