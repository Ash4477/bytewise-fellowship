import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ash4477')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    //     .catch((err) => console.log(err));
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Repos: {data.public_repos}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ash4477');
    return response.json();
}