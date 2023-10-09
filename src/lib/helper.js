export function convertNum(num) {
  let thousand = 1000;
  let million = thousand * 1000;
  let billion = million * 1000;
  let namedNum = "";
  if (num >= thousand && num < million) {
    namedNum += Math.floor(num / thousand) + "k";
  } else if (num >= million && num < 10 * million) {
    let calculated =
      (num / million).toPrecision(2).toString().slice(-1) === "0"
        ? Math.floor(num / million)
        : (num / million).toPrecision(2);
    namedNum += calculated + "M";
  } else if (num >= 10 * million && num < billion) {
    let inMillion = (namedNum += Math.floor(num / million) + "M");
    namedNum += inMillion + "M";
  } else if (num >= billion) {
    namedNum += (num / billion).toPrecision(2) + "B";
  } else namedNum += num;
  return namedNum;
}

export function calcDate(date) {
  let publishDate = new Date(date);
  let current = new Date();

  return dateDiffInDays(publishDate, current);
}

export function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export function processDuration(duration) {
  const timeArray = duration.match(/(\d+)/g);

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (timeArray.length === 3) {
    hours = parseInt(timeArray[0]);
    minutes = parseInt(timeArray[1]);
    seconds = parseInt(timeArray[2]);
  } else if (timeArray.length === 2) {
    minutes = parseInt(timeArray[0]);
    seconds = parseInt(timeArray[1]);
  } else if (timeArray.length === 1) {
    seconds = parseInt(timeArray[0]);
  }

  let formattedTime = "";
  if (hours > 0) {
    formattedTime += `${hours}:`;
  }
  formattedTime += `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  return formattedTime;
}

export function createUrl(url, config) {
  let reqUrl = url + "?";
  for (let prop in config) {
    reqUrl += prop + "=" + config[prop] + "&";
  }
  return reqUrl.slice(0, -1);
}
