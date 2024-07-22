import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const CoinPriceChart = (props:any) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.coinId}/market_chart?vs_currency=usd&days=30`
      );
      const priceData = response.data.prices.map((price:any) => [
        price[0], // timestamp
        price[1], // price
      ]);

      setChartOptions({
        title: {
          text: `${props.coinId.toUpperCase()} Price Chart`,
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: 'Price in USD',
          },
        },
        series: [
          {
            name: props.coinId,
            data: priceData,
          },
        ],
      });
    };

    fetchData();
  }, [props.coinId]);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default CoinPriceChart;