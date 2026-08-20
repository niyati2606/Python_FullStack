import React from 'react'

function UserProfileComponent({
    userName = "niyati",
    followers = 0,
    profileImage = "https://via.placeholder.com/100",
}) {
    return (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 30px',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                margin: '5px',
            }}
        >
            <img
                src={profileImage}
                alt={`${userName}'s profile`}
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '2px solid #f3f4f6',
                }}
            />
            <div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#111827',
                        lineHeight: 1.3,
                    }}
                >
                    {userName}
                </div>
                <div style={{ marginTop: '5px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#4f46e5', width: '100%', textAlign: 'center' }}>
                        {followers}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>followers</div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileComponent