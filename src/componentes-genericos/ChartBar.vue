<template>
    <div>
        <apex type="bar" height="250" :options="chartOptions" :series="series"></apex>
      </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import { Vue } from 'vue-property-decorator'
export default  Vue.extend({
      name: 'ChartBar',
     components: {
         apex: VueApexCharts,
        },
        data: () => ({
  series: [{
            name: 'A Receber',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'A Pagar',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
             theme: {
              monochrome: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: 'R$ (Financeiro)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " Milhões"
                }
              }
              }
              }
          
        })
})
</script>