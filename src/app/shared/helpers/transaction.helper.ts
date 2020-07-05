import { TEZOS_USD } from '@constants';
import { ELLIPSIS_FRONT_LETTERS, ELLIPSIS_END_LETTERS, ELLIPSIS_SEPARATOR } from '@constants';

export function addressEllipsis(address: string): string {
    const len = address.length;
    return `${address.substring(0, ELLIPSIS_FRONT_LETTERS)}${ELLIPSIS_SEPARATOR}${address.substring(len - ELLIPSIS_END_LETTERS, len)}`;
}

export function convertXTZtoUSD(xtz: number): number {
    return xtz * TEZOS_USD;
}
