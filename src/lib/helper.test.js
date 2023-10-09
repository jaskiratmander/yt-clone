import { convertNum, createUrl, processDuration } from "./helper";

it("tests helper functions", () => {
  expect(processDuration("PT12M34S")).toBe("12:34");
  expect(convertNum(120000)).toBe("120k");
  expect(
    createUrl(process.env.REACT_APP_GOOGLE_BASE_URL, {
      part: "snippet,contentDetails,statistics,player",
      chart: "mostPopular",
      maxResults: 50,
      key: process.env.REACT_APP_GOOGLE_API_KEY,
    })
  ).toBe(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,player&chart=mostPopular&maxResults=50&key=AIzaSyDCGyvuLQLIxHTVAzvtVbx1vadjSnHpwFQ"
  );
});
