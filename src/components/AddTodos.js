import React, { useState } from 'react'

export default function AddTodos({ Addtodos }) {
    const [title, setTitle] = useState("");
    let submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("hmm")
        }
        else {
            Addtodos(title)
            setTitle("")
        }
    }
    return (
        <div className="row justify-content-center p-0 m-0">
            <div className="col-10 col-md-6">
                <form className='m-auto mt-4' onSubmit={submit}>
                    <h4 className='text-center'>Add Todo</h4>
                    <div className="mb-3 mt-3">
                        <input type="text" className="form-control" placeholder='Add Todo' id="exampleInputEmail1" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
        </div>
    )
}
