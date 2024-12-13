document.addEventListener("DOMContentLoaded", function () {
    const filterType = document.getElementById("filterType");
    const filterDate = document.getElementById("filterDate");
    const filterMonth = document.getElementById("filterMonth");
    const filterYear = document.getElementById("filterYear");
    const applyFilter = document.getElementById("applyFilter");
    const resetFilter = document.getElementById("resetFilter");

    // Set default date to today
    filterDate.valueAsDate = new Date();

    // Set default month to current month
    filterMonth.value = new Date().toISOString().slice(0, 7);

    filterType.addEventListener("change", function () {
        // Hide all filter inputs
        filterDate.parentElement.classList.add("d-none");
        filterMonth.parentElement.classList.add("d-none");
        filterYear.parentElement.classList.add("d-none");

        // Show selected filter input
        switch (this.value) {
            case "day":
                filterDate.parentElement.classList.remove("d-none");
                break;
            case "month":
                filterMonth.parentElement.classList.remove("d-none");
                break;
            case "year":
                filterYear.parentElement.classList.remove("d-none");
                break;
        }
    });

    applyFilter.addEventListener("click", function () {
        // Get selected filter values
        const type = filterType.value;
        let filterValue;

        switch (type) {
            case "day":
                filterValue = filterDate.value;
                break;
            case "month":
                filterValue = filterMonth.value;
                break;
            case "year":
                filterValue = filterYear.value;
                break;
        }

        // Here you would typically make an API call to get filtered data
        // For now, we'll just update the charts with dummy data
        updateChartsWithFilteredData(type, filterValue);
    });

    resetFilter.addEventListener("click", function () {
        // Reset filter inputs
        filterDate.valueAsDate = new Date();
        filterMonth.value = new Date().toISOString().slice(0, 7);
        filterYear.value = new Date().getFullYear().toString();

        // Reset to default view (day)
        filterType.value = "day";
        filterType.dispatchEvent(new Event("change"));

        // Reset charts to original data
        updateChartsWithFilteredData("day", filterDate.value);
    });

    function updateChartsWithFilteredData(type, value) {
        // Update revenue chart with dummy filtered data
        const revenueChart = Chart.getChart("revenueChart");
        if (revenueChart) {
            // Generate dummy data based on filter type
            const data = generateDummyData(type);
            revenueChart.data.labels = data.labels;
            revenueChart.data.datasets[0].data = data.values;
            revenueChart.update();
        }

        // Update product distribution chart
        const productChart = Chart.getChart("productDistribution");
        if (productChart) {
            const data = [
                Math.floor(Math.random() * 50) + 30,
                Math.floor(Math.random() * 40) + 20,
            ];
            productChart.data.datasets[0].data = data;
            productChart.update();
        }
    }

    function generateDummyData(type) {
        switch (type) {
            case "day":
                return {
                    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
                    values: [300, 450, 320, 500, 420, 380],
                };
            case "month":
                return {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    values: [1800, 2200, 1900, 2400],
                };
            case "year":
                return {
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
                    values: [450, 390, 500, 480, 520, 500, 550, 510, 490, 520, 530, 580],
                };
        }
    }
});
