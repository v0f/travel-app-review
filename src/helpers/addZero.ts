export default function addZero(num: number) {
    const str: string = String(num);
    return ( num < 10 ? '0' : '') + str;
}