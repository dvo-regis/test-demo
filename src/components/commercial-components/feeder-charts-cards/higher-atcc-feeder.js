import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { MenuItem, Grid, Stack, Typography, Button, Avatar, Box, ButtonGroup } from '@mui/material';

import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import DashboardCard from '../../shared/DashboardCard';

const HighestATCCFeeder = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const primarylight = theme.palette.grey[100];

    // chart
    const bottomfeederscolumnchart = {
        chart: {
          type: 'bar',
          fontFamily: "'Plus Jakarta Sans', sans-serif;",
          foreColor: '#adb0bb',
          toolbar: {
            show: false,
          },
          height: 200,
          width: "100%",
        },
        colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
        plotOptions: {
          bar: {
            borderRadius: 3,
            columnWidth: '60%',
            barHeight: '60%',
            distributed: true,
            endingShape: 'rounded',
            dataLabels: {
                position: 'top', // Specify the position of data labels to be on top
              },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return  val + "%";  // Display the value with "bn"
          },
          position: 'top',
          style: {
            fontSize: '10px',
            colors: ['#304758'],
            fontWeight: 700,
          },
          offsetY: -20 ,
          
        },
        legend: {
          show: false,
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
            show:false,
        },
        xaxis: {
          categories: [['11KV', 'Dr Bala'], ["11KV" ,"Noman'S Land"], ['11KV', 'T/Wada'], ['11KV', 'Abuja'], ['11KV', 'Yusuf']],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
          },
        },
        yaxis: {
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";  // Append "bn" to y-axis labels
            }
            
          },
        },
        tooltip: {
          theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        },
      };
      const bottomfeedersseries = [
        {
          name: '',
          data: [94, 85, 83, 81.6, 80],
        },
      ];

    return (
        <DashboardCard
            title="Least 5 Performing Feeders - ATC&C" 
        >
            <>
                <Chart options={bottomfeederscolumnchart} series={bottomfeedersseries} type="bar" height="280px" />
            </>
            
        </DashboardCard>
    );
};

export default HighestATCCFeeder;
