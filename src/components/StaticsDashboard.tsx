// app/admin/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getAnalyticsData } from "@/lib/getAnalyticsData";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { UserIcon, EyeIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StaticsDashboard() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [analyticsData, setAnalyticsData] = useState<any>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const data = await getAnalyticsData();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };
    fetchAnalyticsData();
  }, []);

  if (analyticsData) {
    console.log("ALL: ", analyticsData.ALL);
    console.log("TEST_CLICK_MM: ", analyticsData.TEST_CLICK_MM[0][5].value);
  }

  // 페이지별 방문자 수 데이터 (예시)
  const pageVisitsData = {
    labels: ["홈", "예약", "마이페이지", "고객센터"],
    datasets: [
      {
        label: "페이지별 방문자 수",
        data: [300, 150, 100, 50],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // 예약하기 버튼 클릭 수 데이터 (예시)
  const reservationBtnClicksData = {
    labels: ["10/1", "10/2", "10/3", "10/4", "10/5"],
    datasets: [
      {
        label: "예약하기 버튼 클릭 수",
        data: [50, 70, 90, 60, 80],
        borderColor: "#4b74c0",
        fill: false,
      },
    ],
  };

  // 일별 방문자 수 데이터 (예시)
  const dailyVisitsData = {
    labels: ["10/1", "10/2", "10/3", "10/4", "10/5"],
    datasets: [
      {
        label: "일별 방문자 수",
        data: [50, 70, 90, 60, 80],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  // 월별 방문자 수 데이터 (예시)
  const monthlyVisitsData = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        label: "월별 방문자 수",
        data: [500, 600, 700, 800, 900, 1000],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
    ],
  };

  // 접근 기기 비율 데이터 (예시)
  const deviceRatioData = {
    labels: ["모바일", "데스크톱", "태블릿"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  // 통계 카드 컴포넌트
  const StatCard = ({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) => (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        {icon}
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-2xl font-bold">{value}</p>
      </CardBody>
    </Card>
  );

  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      {/* 통계 요약 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-3 col-span-full gap-4 mb-6">
        <StatCard
          icon={<UserIcon className="w-6 h-6" />}
          title="총 방문자 수"
          value="12,345"
        />
        <StatCard
          icon={<EyeIcon className="w-6 h-6" />}
          title="페이지 뷰"
          value="45,678"
        />
        <StatCard
          icon={<ChartBarIcon className="w-6 h-6" />}
          title="평균 체류 시간"
          value="3분 24초"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* 예약하기 버튼 클릭 수  */}
        <Card className="h-[450px]">
          <CardHeader>
            <h2 className="text-lg font-semibold">예약하기 버튼 클릭 수</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Line
              data={reservationBtnClicksData}
              options={{ responsive: true }}
            />
          </CardBody>
        </Card>

        {/* 페이지별 방문자 수 */}
        <Card className="h-[450px]">
          <CardHeader>
            <h2 className="text-lg font-semibold">페이지별 방문자 수</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Bar data={pageVisitsData} options={{ responsive: true }} />
          </CardBody>
        </Card>

        {/* 일별 방문자 수 */}
        <Card className="h-[450px]">
          <CardHeader>
            <h2 className="text-lg font-semibold">일별 방문자 수</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Line data={dailyVisitsData} options={{ responsive: true }} />
          </CardBody>
        </Card>

        {/* 월별 방문자 수 */}
        <Card className="h-[450px]">
          <CardHeader>
            <h2 className="text-lg font-semibold">월별 방문자 수</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Line data={monthlyVisitsData} options={{ responsive: true }} />
          </CardBody>
        </Card>

        {/* 접근 기기 비율 */}
        <Card className="h-[450px]">
          <CardHeader>
            <h2 className="text-lg font-semibold">접근 기기 비율</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Pie data={deviceRatioData} options={{ responsive: true }} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
