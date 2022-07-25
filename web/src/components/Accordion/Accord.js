import React, { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    

    return (
            <Fragment>
                <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                    <AccordionHeader className="text-xl">
                        <p className="my-0  w-11/12 text-left">What expenses can I deduct through my business?</p>
                    </AccordionHeader>
                    <AccordionBody>
                        <ul>
                            <p>The most commonly deducted business expenses are:</p>
                            <li>Salaries and employee benefits</li>
                            <li>Office expenses and supplies</li>
                            <li>Advertising</li>
                            <li>Rent or mortgage</li>
                            <li>Rent or mortgage</li>
                            <li>Business insurance</li>
                            <li>Taxes</li>
                            <li>Depreciation</li>
                            <li>Utilities</li>
                            <li>Loan interest payments</li>
                            <li>Repairs and maintenance</li>
                            <li>Professional services (legal, accounting, etc.)</li>
                            <li>Professional subscriptions</li>
                        </ul>
                        <p className="mt-4 mb-0">
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className="text-xl">
                        <p className="my-0 w-11/12 text-left">
                            We're not always 8" How do I know whether I need to make estimated
                            tax payments throughout the year?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="mb-0">
                            We're not always in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </p>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className="text-xl">
                        <p className="my-0 w-11/12 text-left">
                            When should an LLC become an Scorp?
                        </p>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className="mb-0">
                            in the position that we want to be at. We're
                            constantly growing. We're constantly making mistakes. We're constantly
                            trying to express ourselves and actualize our dreams.
                        </p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
    );
}