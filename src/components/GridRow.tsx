import React from "react"

interface GridRowProps {
    children: React.ReactNode
}

export const GridRow = ({ children }: GridRowProps) => {
    return (
        <div className="grid-row unique-thumb">
            {children}
        </div>
    )
}