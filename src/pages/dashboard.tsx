import { Sidebar } from "../components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enable: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2023-01-17T00:00:00.000Z',
            '2023-01-18T00:00:00.000Z', 
            '2023-01-19T00:00:00.000Z', 
            '2023-01-20T00:00:00.000Z', 
            '2023-01-21T00:00:00.000Z', 
            '2023-01-22T00:00:00.000Z',
            '2023-01-23T00:00:00.000Z', 
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
} as ApexCharts.ApexOptions;

const series = [
    {name: 'series1', data: [31, 220, 54, 85, 46, 15, 99]}
];

export default function Dashboard() {
    return (
       <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent="flex-start">
                <Box
                    p="8"
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                >
                    <Text
                        fontSize="lg"
                        mb="4"
                    >
                        Inscritos da semana
                    </Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
                <Box
                    p="8"
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                >
                    <Text
                        fontSize="lg"
                        mb="4"
                    >
                        Taxa de abertura
                    </Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
            </SimpleGrid>
        </Flex>
       </Flex> 
    );
}