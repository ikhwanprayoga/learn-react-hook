import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFecthingCurrent() {
    const [id, setId] = useState('')
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const fecthPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res => {
            console.log('res', res)
            setPost(res.data)
        }).catch(err => {
            console.log('err', err)
        })
    }

    const handleButton = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        fecthPost()
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleButton}>Fecth</button>
            <p>{post.title}</p>
        </div>
    )
}

export default DataFecthingCurrent
