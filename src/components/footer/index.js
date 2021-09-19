import React from 'react';
import { Container, Title, Wrapper, Link, Row, Column } from './styles/footer';

export const  Footer = ({children, ...restOfProps}) => {
    return <Container {...restOfProps }>{children}</Container>
};

Footer.Wrapper = ({children, ...restOfProps}) => {
    return <Wrapper {...restOfProps }>{children}</Wrapper>
};

Footer.Link = ({children, ...restOfProps}) => {
    return <Link {...restOfProps }>{children}</Link>
};

Footer.Row = ({children, ...restOfProps}) => {
    return <Row {...restOfProps }>{children}</Row>
};
Footer.Column = ({children, ...restOfProps}) => {
    return <Column {...restOfProps }>{children}</Column>
};
Footer.Title = ({children, ...restOfProps}) => {
    return <Title {...restOfProps }>{children}</Title>
};
