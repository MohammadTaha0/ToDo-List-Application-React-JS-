import React from 'react'

export default function TodoItems(props) {
    return (
        <div className="row m-0 p-0 justify-content-center align-items-center">
            <div className="col-12 col-md-7 m-auto">
                <div className='row justify-content-between my-2 align-items-center' >
                    <div className="col-8"><h4 className='text-left'>{props.todos.title}</h4></div>
                    <div className="col-2 text-end">
                        <button className="text-center btn btn-sm p-0 px-1 shadow px-1 py-1" onClick={() => { props.onDelteTodo(props.todos) }}><i className='fa-solid fa-trash text-danger'></i></button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}
