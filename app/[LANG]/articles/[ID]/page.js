import React from "react";
import ArticleUI from "./UI";

export default async function Article({ params, }) {
    const ID = (await params).ID
    const lang = (await params).LANG
    const dict = await langArticle(lang);

    return <ArticleUI ID={ID} lang={lang} dict={dict} />

}

