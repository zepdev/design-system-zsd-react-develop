import { HeaderLongProps } from '../header-long';

export interface ProcessChainItem {
    headline: string;
    listItems: string[];
}
export interface ProcessChainProps extends Partial<HeaderLongProps> {
    contentItems: ProcessChainItem[];
}
//# sourceMappingURL=processChain.interface.d.ts.map