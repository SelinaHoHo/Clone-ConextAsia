import { Col, Row } from 'antd';
import './Card.scss';

const CardComponent = () => {
  return (
    <Row className='container mx-auto lg:flex block'>
      <Col
        span={12}
        className='block md:flex lg:gap-5 gap-8 rounded-md shadow-lg h-fit max-w-fit px-5 lg:px-0'
      >
        <div className='w-[100%] overflow-hidden'>
          <img
            className='h-full block w-full transition-transform duration-500 transform hover:scale-110 rounded-md'
            src='https://conext-production.s3.ap-southeast-1.amazonaws.com/21673595_46990955_64580699_53795393.png'
            alt='card-image'
          />
        </div>
        <div className='py-[20px] w-full pr-[32px]'>
          <div>
            <h3 className='text-[20px] font-semibold '>ST Coworking</h3>
            <p className='mb-4 text-base'>30 Bạch Đằng, Hải Châu, Đà Nẵng</p>
            <p className='text-red-600 line-through text-base'>
              70,000 vnd/day
            </p>
            <p className='mb-[15px] text-base'>50,000 vnd/day</p>
          </div>
          <div className='flex justify-between items-center'>
            <button className='relative btn-shadow font-medium text-black px-[18px] py-[12px] bg-[#fed702] rounded transition-transform duration-300 hover:translate-y-[-5px] group'>
              BOOK A SEAT
            </button>

            <a className='text-[#1890ff] hover:text-[#b6deff]' href='#'>
              See more
            </a>
          </div>
        </div>
      </Col>
      <Col span={12} className=' overflow-hidden hidden lg:block'>
        <img
          src='https://conext-production.s3.ap-southeast-1.amazonaws.com/21673595_46990955_64580699_53795393.png'
          alt='card-image'
        />
      </Col>
    </Row>
  );
};

export default CardComponent;
