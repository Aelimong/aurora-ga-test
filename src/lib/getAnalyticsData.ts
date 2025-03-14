"use server";

import { google } from "googleapis";
import path from "path";
import { OAuth2Client } from "google-auth-library";

// 서비스 계정 키 파일 경로 설정
const keyFilePath = path.join(
  process.cwd(),
  process.env.GOOGLE_SERVICE_KEY_PATH!
);

// 인증 클라이언트 생성
const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
});

const analyticsData = google.analyticsdata("v1beta");

export async function getAnalyticsData() {
  try {
    const authClient = await auth.getClient();
    const response = await analyticsData.properties.runReport({
      auth: authClient as OAuth2Client,
      property: "properties/408248714",
      requestBody: {
        dateRanges: [
          {
            startDate: "7daysAgo",
            endDate: "today",
          },
        ],
        dimensions: [
          { name: "eventName" }, // 이벤트 이름을 디멘션으로 추가
        ],
        metrics: [
          { name: "totalUsers" },
          { name: "activeUsers" },
          { name: "sessions" }, // 세션 수
          { name: "averageSessionDuration" }, // 평균 세션 지속 시간
          { name: "screenPageViews" }, // 총 페이지뷰 수
          { name: "eventCount" }, // 이벤트 수를 메트릭으로 추가
        ],
      },
    });

    // TEST_CLICK_MM 이벤트만 필터링
    const testClickEvents = response.data.rows?.filter(
      (row) => row.dimensionValues?.[0].value === "TEST_CLICK_MM"
    );

    return {
      TEST_CLICK_MM: testClickEvents?.map((row) => row.metricValues),
      ALL: response.data,
    };
  } catch (error) {
    console.error("Error fetching Analytics Data:", error);
    throw error;
  }
}
