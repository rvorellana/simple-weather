import React from "react";
import TitleCard from "./TitleCard";
import Carousel from "./Carousel";
import RightSeparator from "./RightSeparator";
import PropTypes from "prop-types";

const DataCard = ({ title, data, renderItem, separatorIndex }) => (
  <TitleCard title={title}>
    <Carousel>
      {data.map((item, index) => (
        <React.Fragment key={item.id || index}>
          {renderItem(item)}
          {index < separatorIndex && <RightSeparator />}
        </React.Fragment>
      ))}
    </Carousel>
  </TitleCard>
);

export default DataCard;

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  separatorIndex: PropTypes.number.isRequired,
};
