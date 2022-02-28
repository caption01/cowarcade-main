import { ReactElement, ReactNode } from "react";

interface BoxProps {
    children: ReactNode
}

interface BoxElement extends ReactElement {}

export type {
    BoxProps,
    BoxElement
}