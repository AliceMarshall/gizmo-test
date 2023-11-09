import React, { useEffect, useState } from "react";
import styled from "styled-components";

export interface Notification {
    userId: string;
    type: "streak" | "new-cards";
    count?: number;
    timestamp: Date;
}

const Wrapper = styled.section`
    padding: 4em;
`;

const Card = styled.div`
    display: flex;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #7295ff;
    border-radius: 20px;
`;

const Heading = styled.div``;

const NotificationCard = ({
    notification,
    username,
}: {
    notification: Notification;
    username: string;
}) => {
    let heading = `${username} has got a ${notification.count} day streak!`;

    if (notification.type === "new-cards") {
        heading = `${username} added ${
            notification.count && notification.count === 1
                ? `a`
                : notification.count
        } new card${notification.count && notification.count === 1 ? `` : `s`}`;
    }

    return (
        <Card>
            <Heading>{heading}</Heading>
            {/* Add created time functionality
                <Created /> */}
        </Card>
    );
};

export default NotificationCard;
