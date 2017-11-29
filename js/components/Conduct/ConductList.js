import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ConductItem from './ConductItem';

const ConductList = ({ data }) => <View>{data.map(conduct => <ConductItem key={conduct.title} data={conduct} />)}</View>;

ConductList.PropTypes = {
  data: PropTypes.array,
};

export default ConductList;
