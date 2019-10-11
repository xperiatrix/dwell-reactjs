import CollectionViewLayout from './layout';
import { Position, Size, Ranges } from './types';
export default class ListLayout implements CollectionViewLayout {
    readonly rowHeight: number;
    static readonly DEFAULT_ROW_HEIGHT: number;
    constructor(rowHeight?: number);
    configureElement(element: HTMLElement, index: number): void;
    getIndices(ranges: Ranges, count: number, containerSize: Size): number[];
    getElementPosition(index: number): Position;
    getContentSize(count: number, containerSize: Size): Size;
    convertPositionInSize({ x, y }: Position, newContainerSize: Size, oldLayout: CollectionViewLayout): Position;
}
