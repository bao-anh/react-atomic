import React from 'react';
import { ADivider, ATypography } from '../../../components/atoms';
import AtomTypography from '../../atoms/Typography';

const Typography = () => (
  <React.Fragment>
    <ADivider orientation="left">
      Title
    </ADivider>
    <AtomTypography className="mb-3" />
    <ADivider orientation="left">
      Text
    </ADivider>
    <ATypography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </ATypography>
  </React.Fragment>
);

export default Typography;
