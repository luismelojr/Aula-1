import React from "react";

interface BlogInterface {
    title: string;
    description?: string;
}

export const Blog: React.FC<BlogInterface> = ({description, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    )
}