import React from "react";
import ArticleUI from "./UI";

export default async function Article({ params, styles }) {
    const ID = (await params).ID

    return <ArticleUI ID={ID} />

}

