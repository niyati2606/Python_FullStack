import React from 'react'
import FollowerListComponent from './FollowerListComponent'

function Followers() {
    const followers = ['niyati', 'niya26', 'nr'];
    const noFollowers = [];

    return (
        <div>
            <FollowerListComponent followers={noFollowers} />
            <FollowerListComponent followers={followers} />
        </div>
    )
}

export default Followers