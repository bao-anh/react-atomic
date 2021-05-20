import React from 'react';
import { ADivider, ATypography } from '../../../components/atoms';

const Typography = () => (
  <React.Fragment>
    <ADivider orientation="left">
      Title
    </ADivider>
    <div className="mb-6">
      <ATypography variant="title" level={1}>
        Typography
      </ATypography>
      <ATypography variant="title" level={2}>
        Typography
      </ATypography>
      <ATypography variant="title" level={3}>
        Typography
      </ATypography>
      <ATypography variant="title" level={4}>
        Typography
      </ATypography>
      <ATypography variant="title" level={5}>
        Typography
      </ATypography>
    </div>
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
