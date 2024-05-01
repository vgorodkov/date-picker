export enum RangeVariant {
  START = 'start',
  INBETWEEN = 'inbetween',
  END = 'end',
}

export interface Range {
  start: number | null;
  end: number | null;
}
