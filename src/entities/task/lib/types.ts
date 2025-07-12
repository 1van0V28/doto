import type { JSX } from "react"


type StatusColor = "success" | "processing" | "error" | "default" | "warning"

export type StatusStyle = {
    color: StatusColor,
    icon: JSX.Element
}

export type PriorityColor = "cyan" | "gold" | "volcano"

export type CategoryColor = "red" | "blue" | "purple" | "cyan" | "green"