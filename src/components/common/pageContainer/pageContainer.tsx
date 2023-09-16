import React, { ReactNode, FC } from 'react';
import Container from "../container";
// styles
import './pageContainer.scss';

type typePageContainer = {
    children: ReactNode,
}
const PageContainer: FC<typePageContainer> = ({ children }) => {
    return (
        <Container>
            <div className="page__container">{children}</div>
        </Container>
    )
}

export default PageContainer