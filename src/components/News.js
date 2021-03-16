import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState('React')


    useEffect(
        () => {axios.get(`http://newsapi.org/v2/everything?q=${term}&from=2021-02-16&sortBy=publishedAt&apiKey=e2facd343af744dc8db9af2444e7165e`)
        .then(res => {
            setArticles(res.data.articles)
        })
        .then(console.log(term))
        .catch(err => console.log(err))
    }, [term])

    const renderItems = articles.slice(0, 5).map((article) => {
            return (
                <p key={Math.random()}>{article.title}</p>
            )
        })

    return(
        <Fragment>
            <div className="ui input" data-children-count="1">
                <input type="text" value={term} placeholder="Search..." onChange={e => setTerm(e.target.value)} />
            </div>
            <div>{renderItems}</div>
        </Fragment>
    )
}

export default News;

// api key: e2facd343af744dc8db9af2444e7165e

// http://newsapi.org/v2/everything?q=tesla&from=2021-02-16&sortBy=publishedAt&apiKey=e2facd343af744dc8db9af2444e7165e