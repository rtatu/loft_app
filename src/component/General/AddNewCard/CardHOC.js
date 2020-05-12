import React from "react";

const CardHOC = (CardComponent) => {
  return class Card extends React.Component {
    render() {
      return (
        <div
          className="an-card"
          data-name={this.props.data && this.props.data.name}
          data-status={this.props.data && this.props.data.status}
          onClick={(e) =>
            this.props.navigateToFB(e, this.props.data && this.props.data.id)
          }
        >
          <CardComponent {...this.props} />
        </div>
      );
    }
  };
};

export default CardHOC;
