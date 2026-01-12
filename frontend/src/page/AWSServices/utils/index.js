const resources = [
  {
    id: 1,
    resourceId: "i-A93KD82MSQ7128F3",
    name: "Web Server",
    status: "RUNNING",
    region: "Mumbai"
  },
  {
    id: 2,
    resourceId: "i-Z81MN72PLK9902D1F7",
    name: "Database Server",
    status: "STOPPED",
    region: "N. Virginia"
  },
  {
    id: 3,
    resourceId: "i-K19XQ72LAH8819S0",
    name: "Auth Service",
    status: "RUNNING",
    region: "Singapore"
  },
  {
    id: 4,
    resourceId: "i-P00LS82NDJ5527YH",
    name: "Payment Gateway",
    status: "STOPPED",
    region: "Frankfurt"
  },
  {
    id: 5,
    resourceId: "i-W71OP93BVS1193DKF4",
    name: "Notification Engine",
    status: "RUNNING",
    region: "Sydney"
  },
  {
    id: 6,
    resourceId: "i-H29DL72QWE9021XMN",
    name: "Analytics Engine",
    status: "RUNNING",
    region: "Oregon"
  },
  {
    id: 7,
    resourceId: "i-Q82PL19XSJ7720BDK5",
    name: "Search API",
    status: "STOPPED",
    region: "Tokyo"
  },
  {
    id: 8,
    resourceId: "i-M17XZ62ALP5529QRT8",
    name: "Cache Layer",
    status: "RUNNING",
    region: "Paris"
  },
  {
    id: 9,
    resourceId: "i-R51YT82BGK1902LQA2",
    name: "Image Processor",
    status: "STOPPED",
    region: "Seoul"
  },
  {
    id: 10,
    resourceId: "i-J81MK20PLS7728NWF9",
    name: "Messaging Queue",
    status: "RUNNING",
    region: "Ireland"
  }
];

const resources2 = [
  {
    id: 1,
    resourceId: "arn:aws-rds:ap-south-1",
    name: "User Database",
    engine: "mysql",
    status: "RUNNING",
    region: "Mumbai"
  },
  {
    id: 2,
    resourceId: "arn:aws-rds:us-east-1",
    name: "Accounts DB",
    engine: "postgres",
    status: "STOPPED",
    region: "N. Virginia"
  },
  {
    id: 3,
    resourceId: "arn:aws-rds:ap-southeast-1",
    name: "Auth Cluster",
    engine: "aurora-postgres",
    status: "RUNNING",
    region: "Singapore"
  },
  {
    id: 4,
    resourceId: "arn:aws-rds:eu-central-1",
    name: "Payment DB",
    engine: "mysql",
    status: "STOPPED",
    region: "Frankfurt"
  },
  {
    id: 5,
    resourceId: "arn:aws-rds:ap-southeast-2",
    name: "Notification DB",
    engine: "postgres",
    status: "RUNNING",
    region: "Sydney"
  },
  {
    id: 6,
    resourceId: "arn:aws-rds:us-west-2",
    name: "Analytics Database",
    engine: "aurora-postgres",
    status: "RUNNING",
    region: "Oregon"
  },
  {
    id: 7,
    resourceId: "arn:aws-rds:ap-northeast-1",
    name: "Search Logs DB",
    engine: "mysql",
    status: "STOPPED",
    region: "Tokyo"
  },
  {
    id: 8,
    resourceId: "arn:aws-rds:eu-west-3",
    name: "Cache Metadata Store",
    engine: "postgres",
    status: "RUNNING",
    region: "Paris"
  },
  {
    id: 9,
    resourceId: "arn:aws-rds:ap-northeast-2",
    name: "Image Processing DB",
    engine: "aurora-postgres",
    status: "STOPPED",
    region: "Seoul"
  },
  {
    id: 10,
    resourceId: "arn:aws-rds:eu-west-1",
    name: "Messaging Queue DB",
    engine: "mysql",
    status: "RUNNING",
    region: "Ireland"
  }
];

const resources3 = [
  {
    id: 1,
    resourceId: "arn:aws-asg:ap-south-1",
    name: "WebApp-ASG",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 8,
    status: "RUNNING",
    region: "Mumbai"
  },
  {
    id: 2,
    resourceId: "arn:aws-asg:us-east-1",
    name: "API-Service-ASG",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 6,
    status: "STOPPED",
    region: "N. Virginia"
  },
  {
    id: 3,
    resourceId: "arn:aws-asg:ap-southeast-1",
    name: "AuthEngine-ASG",
    desiredCapacity: 5,
    minSize: 2,
    maxSize: 9,
    status: "RUNNING",
    region: "Singapore"
  },
  {
    id: 4,
    resourceId: "arn:aws-asg:eu-central-1",
    name: "Payment-ASG",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 4,
    status: "STOPPED",
    region: "Frankfurt"
  },
  {
    id: 5,
    resourceId: "arn:aws-asg:ap-southeast-2",
    name: "Notification-ASG",
    desiredCapacity: 6,
    minSize: 3,
    maxSize: 10,
    status: "RUNNING",
    region: "Sydney"
  },
  {
    id: 6,
    resourceId: "arn:aws-asg:us-west-2",
    name: "Analytics-ASG",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 7,
    status: "RUNNING",
    region: "Oregon"
  },
  {
    id: 7,
    resourceId: "arn:aws-asg:ap-northeast-1",
    name: "Search-ASG",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 5,
    status: "STOPPED",
    region: "Tokyo"
  },
  {
    id: 8,
    resourceId: "arn:aws-asg:eu-west-3",
    name: "CacheLayer-ASG",
    desiredCapacity: 7,
    minSize: 4,
    maxSize: 9,
    status: "RUNNING",
    region: "Paris"
  },
  {
    id: 9,
    resourceId: "arn:aws-asg:ap-northeast-2",
    name: "ImageProcessor-ASG",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 3,
    status: "STOPPED",
    region: "Seoul"
  },
  {
    id: 10,
    resourceId: "arn:aws-asg:eu-west-1",
    name: "Messaging-ASG",
    desiredCapacity: 5,
    minSize: 2,
    maxSize: 8,
    status: "RUNNING",
    region: "Ireland"
  }
];



export {resources, resources2, resources3};