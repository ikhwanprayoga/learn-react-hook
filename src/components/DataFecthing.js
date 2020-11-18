import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFecthing() {
    const [posts, setPosts] = useState([])

    const fectData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log('res', res)
            setPosts(res.data)
        }).catch(err => {
            console.log('err', err)
        })
    }

    useEffect(() => {
        fectData()
    }, [])
    
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFecthing
