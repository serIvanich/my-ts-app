import {Meta, Story} from "@storybook/react";
import React from "react";
import {UncontroledAccordion, UncontroledAccordionPropsType} from "./UncontroledAccordion";


export default {
    title: 'Component/UncontroledAccordion',
    component: UncontroledAccordion,
    argTypes: {
        fontSize: {
            table: {
                category: 'Size'
            }
        }
    }
} as Meta;


export const ModeChanging: Story<UncontroledAccordionPropsType> = (args) => {

    return <UncontroledAccordion {...args} />
}
ModeChanging.args = {
    titleValue: 'Users'
}