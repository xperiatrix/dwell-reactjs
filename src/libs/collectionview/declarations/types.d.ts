export declare class Position {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    map(f: (coordinate: number) => number): Position;
    equals(other: Position): boolean;
    get(direction: Direction): number;
    toString(): string;
    static in(direction: Direction, first: number, second: number): Position;
}
export declare class Line {
    readonly start: Position;
    readonly end: Position;
    constructor(start: Position, end: Position);
    toString(): string;
}
export declare class Size {
    readonly width: number;
    readonly height: number;
    constructor(width: number, height: number);
    get(direction: Direction): number;
    toString(): string;
    static in(direction: Direction, first: number, second: number): Size;
}
export declare class Range {
    readonly start: number;
    readonly end: number;
    constructor(start: number, end: number);
    toString(): string;
}
export declare class Ranges {
    readonly horizontal: Range;
    readonly vertical: Range;
    constructor(horizontal: Range, vertical: Range);
    get(direction: Direction): Range;
    toString(): string;
}
export declare class Insets {
    readonly top: number;
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    constructor(top: number, bottom: number, left: number, right: number);
    getStart(direction: Direction): number;
    getEnd(direction: Direction): number;
    toString(): string;
}
export declare class Spacing {
    readonly horizontal: number;
    readonly vertical: number;
    constructor(horizontal: number, vertical: number);
    get(direction: Direction): number;
    toString(): string;
}
export declare class Direction {
    static readonly HORIZONTAL: Direction;
    static readonly VERTICAL: Direction;
    private constructor();
    readonly other: Direction;
    toString(): "Direction.HORIZONTAL" | "Direction.VERTICAL";
}
