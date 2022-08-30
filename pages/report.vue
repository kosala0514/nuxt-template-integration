<template>
  <div class="content">
    <div class="page-inner">
      <div class="mt-2 mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Most Popular Products Sales Report</div>
            </div>
            <div class="card-body">
              <div class="chart-container">
                <canvas id="popular_products"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "all",
  layout: "dashboard",
  head: {
    bodyAttrs: {
      "data-background-color": "dark",
    },
  },
  methods: {
    chart() {
      const multipleLineChart = document
        .getElementById("popular_products")
        .getContext("2d");
      var myMultipleLineChart = new Chart(multipleLineChart, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Laptop",
              borderColor: "#1d7af3",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#1d7af3",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              backgroundColor: "transparent",
              fill: true,
              borderWidth: 2,
              data: [30, 45, 45, 68, 69, 90, 100, 158, 177, 200, 245, 256],
            },
            {
              label: "Watch",
              borderColor: "#59d05d",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#59d05d",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              backgroundColor: "transparent",
              fill: true,
              borderWidth: 2,
              data: [10, 20, 55, 75, 80, 48, 59, 55, 23, 107, 60, 87],
            },
            {
              label: "Phones",
              borderColor: "#f3545d",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#f3545d",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              backgroundColor: "transparent",
              fill: true,
              borderWidth: 2,
              data: [10, 30, 58, 79, 90, 105, 117, 160, 185, 210, 185, 194],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "top",
          },
          tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10,
          },
          layout: {
            padding: { left: 15, right: 15, top: 15, bottom: 15 },
          },
        },
      });
    },
  },
  mounted() {
    this.chart();
  },
};
</script>
