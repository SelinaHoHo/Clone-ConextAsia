import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Card, Col } from "antd";

const WorkplaceCard = (prop) => {
  const { t } = useTranslation();

  return (
    <Col span={8}>
      <Card
        className="card-other-workplace"
        bordered={false}
        cover={<img alt="example" src={prop.img} />}
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
