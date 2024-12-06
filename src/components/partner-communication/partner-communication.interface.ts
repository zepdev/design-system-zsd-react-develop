import { ReactNode } from "react";
import { GlobalVariants } from "src/interfaces/global-variants";

export interface PartnerCommunicationProps {
    headline: string;
    children: ReactNode;
    variant?: GlobalVariants;
}