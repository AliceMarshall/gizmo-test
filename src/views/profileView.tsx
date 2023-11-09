import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Notifications from "../components/notifications/notifications";

interface User {
    id: string;
    username: string;
    followers: 25;
    following: 12;
}

const Loader = styled.div`
    display: flex;
    align-self: center;
`;

const Wrapper = styled.section`
    padding: 4em;
    font-family: sans-serif;
`;

const Username = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
`;

const ProfileInfo = styled.div`
    display: flex;
    justify-content: center;
`;

const Follow = styled.div`
    background-color: #7295ff;
    color: #fff;
    padding: 10px 15px;
    margin: 0 10px;
    border-radius: 20px;
`;

const ProfileView = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const getData = () => {
        fetch("../userData.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading || !user) {
        return <Loader>Loading...</Loader>;
    }

    return (
        <Wrapper>
            <Username>{user.username}</Username>
            <ProfileInfo>
                <Follow>{user.followers} followers</Follow>
                <Follow>{user.following} following</Follow>
            </ProfileInfo>
            <Notifications userId={user.id} username={user.username} />
        </Wrapper>
    );
};

export default ProfileView;
