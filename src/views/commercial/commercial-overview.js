import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import WelcomeCard from 'src/components/dashboards/ecommerce/CommercialWelcomeCard';
import ATCC from 'src/components/dashboards/ecommerce/ATCC';
import BillingEfficiency from 'src/components/dashboards/ecommerce/BillingEfficiency';
import CollectionEfficiency from 'src/components/dashboards/ecommerce/CollectionEfficiency';
import CustomerMetrics from 'src/components/dashboards/ecommerce/CustomerMetrics';

const CommercialOverview = () => {
  return (
    <PageContainer title="Financial Overview" description="This is Financial Overview Dashboard page">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* Welcome Card */}
          <Grid item xs={12}>
            <WelcomeCard />
          </Grid>

          {/* ATCC, Billing Efficiency, and Collection Efficiency */}
          <Grid item xs={12} sm={6} lg={4}>
            <ATCC />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <BillingEfficiency />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CollectionEfficiency />
          </Grid>

          {/* Customer Metrics */}
          <Grid item xs={12}>
            <CustomerMetrics />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default CommercialOverview;
