import React, { Suspense, lazy } from "react";
import styled from "styled-components";

const Profile = lazy(() => import("./views/profileView"));

const App = () => {
    return (
        <Suspense fallback={<div className="app-loader"></div>}>
            <Profile />
        </Suspense>
    );
};

export default App;
