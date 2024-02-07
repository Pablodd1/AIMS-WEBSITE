import React, { useRef, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, List, ListItem, Skeleton, Slide, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { ImCancelCircle } from "react-icons/im";
import { highlightMatchedText } from './leafs/highlightLetters';
import { Link } from 'react-router-dom';


export default function BlogsList({ styles, limit, titles, empty, searchedCount, search }) {
    const { t } = useTranslation()  
    const domain = useSelector(x => x.domain);
    const [currentLimit, setCurrentLimit] = useState(limit);
    const inputRef = useRef(null);
    const [searchArticle, setSearchArticle] = useState('');
    const [filteredTitles, setFilteredTitles] = useState(null);
    const [counts, setCounts] = useState(searchedCount);
    const searchResultsRef = useRef(null);

    React.useEffect(() => {
        const inputElement = inputRef.current;
        const searchResultsElement = searchResultsRef.current;
        if (inputElement && searchResultsElement) {
            const inputRect = inputElement.getBoundingClientRect();
            searchResultsElement.style.top = `${inputRect.bottom + 10}px`;
        }
    }, [filteredTitles]);


    const handleLoadMore = (x, n) => {
        const newLoadedBlogs = currentLimit + n;
        setCurrentLimit(newLoadedBlogs);
        if (newLoadedBlogs >= x) {
            setCurrentLimit(x);
        }


    };

    const searchArticles = (event) => {
        const query = event.target.value;
        setSearchArticle(query);

        // Filtering Titles of Blog
        const filteredTitlesArray = query
            ? titles.filter((x) =>
                x.title.toLowerCase().includes(query.toLowerCase())
            )
            : null;
        setFilteredTitles(filteredTitlesArray);
        setCounts(filteredTitlesArray.length)
    };


    return (
        <>

            <Grid item xs={12} >
                <CardHeader title={
                    <Typography variant='h3' component='h2' style={styles.sectionTitle}>
                        {t('headings.articles')}  {counts && counts > 0 ?
                            <Typography sx={styles.searchCounts} >
                                {` (${counts} ${t('headings.result')} ${counts > 1 ? 's' : ''} ${t('headings.found')}.)`}
                            </Typography>
                            : ''}

                    </Typography>

                }
                    action={search &&
                        <>
                            <div className="flexbox">
                                <div className="search">
                                    <div>
                                        {(filteredTitles != null) && (
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                                onClick={() => { setFilteredTitles(null); setSearchArticle(''); setCounts(null) }}
                                                sx={{ position: 'absolute', color: '#000', right: '2px', bottom: '1px' }}
                                            >
                                                <ImCancelCircle />
                                            </IconButton>)}
                                        <input ref={inputRef} id="searchArticle" value={searchArticle} type="text" placeholder={`${t('headings.searchArticle')}...`} onChange={searchArticles} />

                                    </div>
                                </div>

                            </div>
                        </>

                    }
                />
            </Grid>
            <Grid item xs={12} >
                <>
                    {(filteredTitles != null) && (
                        <Box id="searchResults"
                            ref={searchResultsRef}
                            component={'div'} className="searchResult"
                            sx={{
                                ...styles.listDialogue,
                                ...{
                                    minHeight: 0,
                                    height: 'auto',
                                    minWidth: 'auto',
                                    maxWidth: '80vw',
                                    width: 'max-content',
                                    overflow: 'auto',
                                    mb: 0,
                                }
                            }}
                        >
                            <Typography >

                            </Typography>
                            <List>
                                {filteredTitles.map(x => (
                                    <ListItem
                                        key={x._id}>
                                        <Link
                                            to={`/customer-care/${x._id}`}
                                            sx={{
                                                textDecoration: 'none',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                            rel='follow index'
                                        >
                                            {highlightMatchedText(x.title, searchArticle)}

                                        </Link>
                                    </ListItem>

                                ))}
                            </List>
                        </Box>)}
                </>
            </Grid>

            {
                titles[0] != null ?
                    titles.slice(0, currentLimit).map((x, i) => (
                        <Slide
                            appear
                            in={true}
                            direction='left'
                            {...({ timeout: 250 * i })}
                            key={i}
                        >
                            <Grid item key={i} >
                                <Link underline='none'
                                    to={`/customer-care/${x._id}`}
                                    rel='follow index'
                                    >
                                    <Card sx={styles.articleCard}>
                                        <CardMedia
                                            component='img'
                                            height='250'
                                            src={x.image}
                                            alt={x.title}
                                        />
                                        <CardContent>
                                            <Typography component={'p'} variant='p' sx={styles.articleDescription}>
                                                {x.title.length > 70 ? `${x.title.slice(0, 70)}...` : x.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>

                            </Grid>
                        </Slide>
                    ))

                    :
                    (
                        empty ? "No Result Found" :
                            Array(5).fill(' ').map((_, index) => (
                                <Grid item key={index} sx={{ width: '100%' }}>
                                    <Skeleton variant="rectangular" height={40} width={'auto'} sx={{ m: 2 }} />
                                    <Skeleton variant="rounded" height={24} width={'auto'} sx={{ m: 2 }} />
                                </Grid>
                            )))
            }

            {currentLimit < titles.length && (
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        variant='contained'
                        disabled={empty}
                        onClick={() => handleLoadMore(titles.length, 3)}
                        aria-label={t('Load More')}
                        sx={styles['aboutUS-button']}
                    >
                        {t('Load More')}
                    </Button>
                </Grid>
            )}

        </>

    )
}
