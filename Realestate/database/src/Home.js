import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function Home () {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/business-man-create-design-house-home_35761-59.jpg?w=2000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
         
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.babbarrealtorshub.com/wp-content/uploads/2022/02/FeatureImage_real_estate_business_plan.jpg?fit=900%2C600&ssl=1"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>

    </div>
  )
}