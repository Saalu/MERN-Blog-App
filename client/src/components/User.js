import React from 'react'

const User = ({posts}) => {
    return (
        <div>
            <table className="table table-stripe table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
              {
                  posts.map((post,index) => (
                    <tbody key={index}>
                    <tr>
                  <td>{post.name}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>   
                    </tr>
                </tbody>
                  ))
              }
            </table>
        </div>
    )
}

export default User
