import React from 'react'

function FollowerListComponent({followers}) {
    return (
        <div className='container m-4'>
            <div className="card p-4 shadow-sm">
                <h2>Followers</h2>

                {followers.length === 0 ? (
                    <p className="text-muted">No followers yet</p>
                ) : (
                    <ul className="list-group">
                        {followers.map((username, index) => (
                            <li className="list-group-item" key={index}>
                                {username}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FollowerListComponent