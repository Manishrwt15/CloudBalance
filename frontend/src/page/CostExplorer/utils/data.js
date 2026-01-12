const servicesPricingData = [
  {
    service: "AWS EC2",
    prices: [12500.75, 13850.40, 14200.90, 15075.30, 15800.85, 16540.60]
  },
  {
    service: "AWS S3",
    prices: [8450.25, 8920.80, 9100.45, 9650.90, 10250.60, 10890.35]
  },
  {
    service: "Google Cloud Compute",
    prices: [11320.50, 11890.75, 12540.20, 13010.95, 13780.60, 14560.40]
  },
  {
    service: "Azure Virtual Machines",
    prices: [10850.30, 11240.85, 11890.40, 12350.75, 13075.60, 13890.20]
  },
  {
    service: "Cloud Database",
    prices: [9800.45, 10250.90, 10890.60, 11540.80, 12075.35, 12890.95]
  }
];

const dataSource = {
  chart: {
    caption: "Reach of Social Media Platforms amoung Adults",
    yaxisname: "% of Adults on this platform",
    subcaption: "2018-2023",
    showhovereffect: "1",
    numbersuffix: "%",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> of Adults were on $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2021"
        },
        {
          label: "2023"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Facebook",
      data: [
        {
          value: "68"
        },
        {
          value: "69"
        },
        {
          value: "69"
        },
        {
          value: "68"
        }
      ]
    },
    {
      seriesname: "Instagram",
      data: [
        {
          value: "35"
        },
        {
          value: "37"
        },
        {
          value: "40"
        },
        {
          value: "47"
        }
      ]
    },
    {
      seriesname: "LinkedIn",
      data: [
        {
          value: "25"
        },
        {
          value: "27"
        },
        {
          value: "28"
        },
        {
          value: "30"
        }
      ]
    },
    {
      seriesname: "Twitter",
      data: [
        {
          value: "24"
        },
        {
          value: "22"
        },
        {
          value: "23"
        },
        {
          value: "22"
        }
      ]
    }
  ]
};

export {servicesPricingData, dataSource};