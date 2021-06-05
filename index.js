const axios = require('axios');
const core = require('@actions/core');

(async function () {
  const currentDate = new Date();
  console.log(currentDate, currentDate.toISOString());
  
  const url =
    'https://www.nike.com/kr/launch/?type=upcoming&activeDate=date-filter:AFTER_DATE';
  const { data } = await axios.default.get(url);
  const isTodayNotification = data.includes('응모하기');
  if (!isTodayNotification) {
    core.setFailed('fail');
  }
})();
