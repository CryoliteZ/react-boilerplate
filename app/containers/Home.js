import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, Carousel, Icon, Card, Avatar, Row, Col } from 'antd';
import styled from 'styled-components'

const { Meta } = Card;

const StyledCarousel = styled(Carousel)`
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #333;
  overflow: hidden;
`;

const CarouselText  = styled.h2`
  color: #FFF;
`;

class Home extends React.Component {
  state = {
    loading: true,
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  componentDidMount () {
    setTimeout( () => {this.setState({loading:false})}, 1000)
  }

  render() {
    const { loading } = this.state;

    return (
      <Row
        style={{
          height: '60vh',
        }}
        type="flex"
        justify="space-around"
        align="middle"
      >
      <Col xs={{ span: 16 }} lg={{ span: 8 }}>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}
         <StyledCarousel autoplay>
          <div> <CarouselText><Icon type="fire" theme="outlined" /> It works!</CarouselText></div>
          <div> <CarouselText><Icon type="coffee" theme="outlined" /> React-router example</CarouselText></div>
          <div> <CarouselText>< Icon type="dashboard" theme="outlined" /> Webpack hot-reload </CarouselText></div>
          <div> <CarouselText><Icon type="gift" theme="outlined" /> Antd styled components</CarouselText></div>
        </StyledCarousel>

        <Card
          style={{ width: '100%', marginTop: 16 }}
          actions={[<Link to = "example"><Icon type="branches" /></Link>, 
            <Link to = "example"><Icon type="edit" /></Link>, 
            <Link to = "example"><Icon type="ellipsis" /></Link>]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://i.imgur.com/V89IcdI.png" />}
              title="Wow such React"
              description="Click icons below for more"
            />
          </Skeleton>
        </Card>
      </Col>
     </Row>
    );
  }
}

export default Home;
