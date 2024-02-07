
import { Typography } from "@mui/material";
import React from "react";


const BlogLayout = ({ data }) => {
    const Paragraph = ({ content }) => (
        <Typography component={'p'} variant="p" sx={{fontFamily:'arial',fontSmooth:"auto",textAlign:'justify', color:'#0009',pb:2,m:'auto',mb:2}}>{content}</Typography>
    );

    const Heading = ({  content }) => {
        const H = `h3`;
        return (
            <Typography component={H} variant="h5" sx={{fontFamily:'Courgette',fontSmooth:"auto",color:'#000d', pb:0,m:'auto',mb:0}}>{content}</Typography>
        );
    };


    if (data != undefined)
        return Object.entries(data).map(([key, value]) => {
            switch (true) {
                case key.startsWith("para"):
                    return <Paragraph key={key} content={value} />;
                case key.startsWith("head"):
                    const level = key.slice(-1);
                    return <Heading key={key} level={level} content={value} />;
                default:
                    return <h2>Incomplete Data Found.</h2>;
            }
        });
};



export default BlogLayout;