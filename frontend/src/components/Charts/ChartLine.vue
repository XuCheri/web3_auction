<!--
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-21 16:47:30
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-21 16:51:57
 * @FilePath: /web3_auction/src/components/Charts/ChartLine.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <canvas ref="chart" :style="{ height: height + 'px' }"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

export default {
    props: ["data", "height"],
    data() {
        return {
            chart: null,
        }
    },
    mounted() {
        let ctx = this.$refs.chart.getContext("2d")

        this.chart = new Chart(ctx, {
            type: "line",
            data: this.data,
            options: {
                layout: {
                    padding: {
                        top: 30,
                        right: 15,
                        left: 10,
                        bottom: 5,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                tooltips: {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                },
                scales: {
                    y: {
                        grid: {
                            display: true,
                            color: "rgba(0, 0, 0, .2)",
                            zeroLineColor: "#000000",
                            borderDash: [6],
                            borderDashOffset: [6],
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1000,
                            display: true,
                            color: "#8C8C8C",
                            font: {
                                size: 14,
                                lineHeight: 1.8,
                                weight: "600",
                                family: "Open Sans",
                            },
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: true,
                            color: "#8C8C8C",
                            font: {
                                size: 14,
                                lineHeight: 1.5,
                                weight: "600",
                                family: "Open Sans",
                            },
                        },
                    },
                },
            },
        })
    },
    // Right before the component is destroyed,
    // also destroy the chart.
    beforeDestroy: function () {
        this.chart.destroy()
    },
}
</script>

<style lang="scss" scoped></style>
