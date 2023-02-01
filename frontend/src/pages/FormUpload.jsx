import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormUpload = () => {
  const [dob, setDob] = useState()
  const [adhar, setAdhar] = useState()
  const [tc, setTc] = useState()
  const [Printdata, setPrintdata] = useState([])
  console.log("Printdata", Printdata);
  const userInstance = axios.create({
    baseURL: "http://localhost:5000"
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append("dob", dob[0])
    fd.append("adhar", adhar[0])
    fd.append("tc", tc[0])
    const { data } = await userInstance.post("/doc/add", fd)
    console.log(data);
  }
  const getAllDoc = async () => {
    const { data } = await userInstance.get("/doc")
    setPrintdata(data.result)
    console.log(data.result);
  }
  useEffect(() => {
    getAllDoc()
  }, [])

  return (<>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div class="card mt-5">
              <div class="card-header">header</div>
              <div class="card-body">
                <input
                  type="file"
                  onChange={e => setDob(e.target.files)}
                  className="form-control"
                  placeholder='enter a doc' />
                <input
                  type="file"
                  onChange={e => setAdhar(e.target.files)}
                  className="form-control"
                  placeholder='enter a doc' />
                <input
                  type="file"
                  onChange={e => setTc(e.target.files)}
                  className="form-control"
                  placeholder='enter a doc' />
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    {
      Printdata.map(item => <div class="card mt-5">
        <img
          src={`http://localhost:5000/${item.userAdhar}`}
          // height={100}
          className="img-fluid"
          alt="" />
        <img
          src={`http://localhost:5000/${item.userDob}`}
          height={100}
          className="img-fluid"
          alt="" />
        <img
          src={`http://localhost:5000/${item.userTc}`}
          height={100}
          className="img-fluid"
          alt="" />
      </div>
      )
    }
  </>
  )
}

export default FormUpload
