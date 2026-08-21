import React from 'react';

function ProfileCard({ name, profilePic, bio }) {
    return (
        <div className="card shadow text-center p-4">
            <img
                src={profilePic}
                alt={name}
                className="rounded-circle mx-auto"
                style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text text-muted">{bio}</p>
            </div>
        </div>
    );
}

export default ProfileCard;