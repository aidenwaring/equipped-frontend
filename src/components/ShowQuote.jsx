import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function ShowQuote(props) {

    const [ quote, setQuote ] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/quotes/${props.match.params.id}`, {withCredentials: true})
        .then((res) => {
            setQuote(res.data)
        })
        }, [])

    return (
        <div>
            <h1>Show Quote</h1>
            <h3>Product: {quote.product}</h3>
            <h3>Length: {quote.length}</h3>
        </div>
    )
}