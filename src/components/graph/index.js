import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Graph({ data }) {

  return (
    <Box>
      <ResponsiveContainer height="100%" aspect={4.0/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="attribute1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="attribute2" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

Graph.protoTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    attribute1: PropTypes.number,
    attribute2: PropTypes.number,
  }))
};

export default Graph;
