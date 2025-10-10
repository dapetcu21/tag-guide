"use client";

export enum PageType {
  Brief,
  Debrief,
  Question,
}

export type PageKey =
  | { type: PageType.Brief }
  | { type: PageType.Debrief }
  | { type: PageType.Question; questionIndex: number };
