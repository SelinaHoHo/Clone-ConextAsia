import { Card, Col } from "antd";

const WorkplaceCard = (prop) => {
  return (
    <Col md={8} sm={24}>
      <Card
        className="card-other-workplace"
        bordered={false}
        cover={
          <img
            className="block h-full w-full transition-transform duration-500 transform hover:scale-95 rounded-md "
            alt="example"
            src={prop.img}
          />
        }
      >
        <h1 className="lg:text-xl text-[#171c32] font-bold font-apple md:text-base text-md lg:mb-[5px]">
          {prop.title}
        </h1>
        <p className="text-[#171c32] text-[15px] mb-[15px] font-apple">
          {prop.address}
        </p>
      </Card>
    </Col>
  );
};

export default WorkplaceCard;
