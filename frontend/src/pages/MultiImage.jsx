import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MultiImage = () => {
    const [name, setName] = useState("kate")
    const [documents, setDocuments] = useState()
    const [users, setUsers] = useState()

    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })
    const handleSubmit = async e => {
        e.preventDefault()
        // console.log("documents");
        const fd = new FormData()
        fd.append("name", name)
        for (let d of documents) {
            fd.append("doc", d)
        }
        // for (const x of fd.entries()) {
        //     console.log(x);
        // }
        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);
    }
    const getAllUsers = async e => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setUsers(result)
        console.log(result);
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return (<>
        <pre>
            {JSON.stringify(documents, null, 2)}
        </pre>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='form-control'
                    placeholder='enter a name' />
                <input
                    type="file"
                    onChange={e => setDocuments(e.target.files)}
                    className=''
                    placeholder='Choose file' />
                <br />
                <button type="submit" class="btn btn-primary">Primary</button>
            </div>
        </form>

        <div className="mt-5">
            {
                users?.map(item => <div class="card col-sm-6 offset-3">
                    <div class="card-body">
                        <h1>{item.name}</h1>
                        {
                            item.docs.map(url => <img
                                src={`http://localhost:5000/${url}`}
                                height={100}
                                className="img-fluid"
                                alt="" />
                            )
                        }
                    </div>
                </div>)
            }
        </div>
    </>
    )
}

export default MultiImage