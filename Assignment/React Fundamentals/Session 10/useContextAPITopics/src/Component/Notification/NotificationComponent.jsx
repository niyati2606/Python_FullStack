import React, { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationComponent() {
    const {
        notificationCount,
        addNotification,
        clearNotifications
    } = useContext(NotificationContext);

    return (
        <div className="card p-4 mt-4">
            <h3>WhatsApp Notifications</h3>

            <p>
                Unread Messages: <strong>{notificationCount}</strong>
            </p>

            <button
                className="btn btn-success me-2"
                onClick={addNotification}
            >
                New Message
            </button>

            <button
                className="btn btn-danger"
                onClick={clearNotifications}
            >
                Clear
            </button>
        </div>
    );
}

export default NotificationComponent;