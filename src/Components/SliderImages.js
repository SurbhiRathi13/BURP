import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';

function SliderImages() {
  return (
    <div>
      <Carousel variant="dark">
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }} >
    <Card className="bg-dark text-white">
      <Card.Img style={{position:"absolute" , top:"-80%"}} src="pic2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }}>
  <Card className="bg-dark text-white">
      <Card.Img style={{position:"absolute" , top:"-80%"}}  src="pic2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
  <Carousel.Item interval={1500} style={{height:"300px", position:"relative" , align:"center"  }}>
  <Card className="bg-dark text-white">
      <Card.Img style={{position:"absolute" , top:"-80%"}} src="pic2.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default SliderImages;