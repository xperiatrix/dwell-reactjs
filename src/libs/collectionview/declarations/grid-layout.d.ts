import CollectionViewLayout from './layout';
import { Direction, Insets, Position, Ranges, Size, Spacing } from './types';
export interface GridLayoutParameters {
    readonly direction?: Direction;
    readonly insets?: Insets;
    readonly spacing?: Spacing;
    readonly itemSize?: Size;
}
export default class GridLayout implements CollectionViewLayout {
    static readonly DEFAULT_DIRECTION: Direction;
    static readonly DEFAULT_INSETS: Insets;
    static readonly DEFAULT_SPACING: Spacing;
    static readonly DEFAULT_ITEM_SIZE: Size;
    private readonly _otherDirection;
    private _otherItemCount;
    private _otherContainerSizeConstraint;
    readonly direction: Direction;
    readonly insets: Insets;
    readonly spacing: Spacing;
    readonly itemSize: Size;
    constructor({ direction, insets, spacing, itemSize }?: GridLayoutParameters);
    private getOtherItemCount;
    configureElement(element: HTMLElement, index: number): void;
    updateContainerSize(containerSize: Size): void;
    getIndices(ranges: Ranges, count: number, containerSize: Size): number[];
    getElementPosition(index: number): Position;
    getContentSize(count: number, containerSize: Size): Size;
    convertPositionInSize(position: Position, newContainerSize: Size, oldLayout: CollectionViewLayout): Position;
}
