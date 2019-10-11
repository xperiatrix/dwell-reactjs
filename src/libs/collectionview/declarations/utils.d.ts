import { Line, Position } from './types';
export declare function unique<T>(items: T[]): T[];
export declare function sort(indices: number[]): number[];
export declare function coalesce<T>(value: T | undefined | null, defaultValue: T): T;
export declare function assert(f: () => boolean): void;
export declare function range(min: number, max: number): number[];
export declare function intersect(line1: Line, line2: Line): Position | undefined;
