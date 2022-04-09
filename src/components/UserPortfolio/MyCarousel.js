import { Carousel } from 'react-bootstrap';
import style from './Mycarousel.module.css';
const MyCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={10000}>
          <img
            className="img-fluid w-100"
            src="/images/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div>
              <h2 className={`h1 mb-4`}>
                Welcome to <span className="text-warning h1">LMS</span>
              </h2>

              <a
                href="all-courses.html"
                className="btn btn-lg btn-warning mb-4"
              >
                All Courses
              </a>
              <a href="#0" className="btn btn-lg btn-outline-light ml-3 mb-4">
                Read More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img-fluid w-100"
            src="/images/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div>
              <h2 className={`h1 mb-4`}>
                Welcome to <span className="text-warning h1">LMS</span>
              </h2>

              <a
                href="all-courses.html"
                className="btn btn-lg btn-warning mb-4"
              >
                All Courses
              </a>
              <a href="#0" className="btn btn-lg btn-outline-light ml-3 mb-4">
                Read More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid w-100"
            src="/images/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div>
              <h2 className={`h1 mb-4`}>
                Welcome to <span className="text-warning h1">LMS</span>
              </h2>

              <a
                href="all-courses.html"
                className="btn btn-lg btn-warning mb-4"
              >
                All Courses
              </a>
              <a href="#0" className="btn btn-lg btn-outline-light ml-3 mb-4">
                Read More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarousel;

// const style = {
//   header: {
//     fontSize: '50px',
//     textTransform: 'uppercase',
//     marginBottom: '130px',
//     fontSize: 'calc(100% + 1vw + 1vh)',
//   },
//   subHeader: {
//     color: 'orange',
//     fontSize: '50px',
//     textTransform: 'uppercase',
//   },
//   btnMain: {
//     background: '#f36b3b',
//     background: 'linear-gradient(to top, #ef612f, #f36b3b)',
//     color: '#fff',
//     border: '1px solid #f36b3b',
//     textTransform: 'uppercase',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     textAlign: 'center',
//   },
//   btnMain2: {
//     background: 'transparent',
//     color: '#fff',
//     border: '1px solid #fff',
//     padding: '14px 45px',
//     margin: '0 10px 150px 10px',
//     textTransform: 'uppercase',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     borderRadius: '5px',
//     textDecoration: 'none',
//   },
// };
