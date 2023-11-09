import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NotificationCard, { Notification } from "./notificationCard";

const Loader = styled.div`
    display: flex;
    align-self: center;
`;

const Wrapper = styled.section`
    padding: 4em;
`;

const NotificationsView = ({
    userId,
    username,
}: {
    userId: string;
    username: string;
}) => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState<Notification[] | []>([]);

    const getData = () => {
        // Would normally use the userId to get this data
        fetch("../userNotificationData.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setNotifications(json);
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <Loader>Loading...</Loader>;
    }

    if (notifications.length < 1) {
        return null;
    }

    return (
        <Wrapper>
            <>
                {notifications.map((notification, i) => (
                    <NotificationCard
                        key={`notification-card${i}`}
                        notification={notification}
                        username={username}
                    />
                ))}
            </>
        </Wrapper>
    );
};

export default NotificationsView;
