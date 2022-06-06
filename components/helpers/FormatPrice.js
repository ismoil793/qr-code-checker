import React from "react";
import PropTypes from "prop-types";

function FormatPrice({ price = 0, currency = true }) {
  const formatPrice = () => {
    let priceF = price.toString();

    const _ = (start, end) => priceF.slice(start, end);

    switch (priceF.length) {
      case 4:
        priceF = `${_(0, 1)} ${_(1, 4)}`;
        break;
      case 5:
        priceF = `${_(0, 2)} ${_(2, 5)}`;
        break;
      case 6:
        priceF = `${_(0, 3)} ${_(3, 6)}`;
        break;
      case 7:
        priceF = `${_(0, 1)} ${_(1, 4)} ${_(4, 7)}`;
        break;
      case 8:
        priceF = `${_(0, 2)} ${_(2, 5)} ${_(5, 8)}`;
        break;
      case 9:
        priceF = `${_(0, 3)} ${_(3, 6)} ${_(6, 9)}`;
        break;
      default:
        priceF = "";
    }

    return (
      <span>
        {priceF}
        {currency ? " сум" : ""}
      </span>
    );
  };

  return <>{formatPrice()}</>;
}

FormatPrice.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.bool,
};

export default FormatPrice;
