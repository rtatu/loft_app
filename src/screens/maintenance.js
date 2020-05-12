import React from "react";
import Maintenance from "../component/Maintenance";
import Base from "../container/base";
import { connect } from "react-redux";

import { fetchFB } from "../store/actions/formAction";

const MaintenanceScreen = (props) => (
  <Base>
    <Maintenance
      forms={props.forms}
      loading={props.loading}
      fetchForms={props.fetchForms}
    />
  </Base>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    forms:
      state.maintenance &&
      state.maintenance.forms &&
      state.maintenance.forms.data,
    loading:
      state.maintenance &&
      state.maintenance.forms &&
      state.maintenance.forms.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForms: () => dispatch(fetchFB),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceScreen);
