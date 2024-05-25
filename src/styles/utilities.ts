export function getDuration(startDate: Date, endDate: Date) : string {
    let yearDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    let dayDiff = endDate.getDate() - startDate.getDate();
    
    // If the day difference is negative, adjust month and day
    if (dayDiff < 0) {
        monthDiff--;
        // Get the number of days in a month for the month and add it to the negative day
        dayDiff += new Date(startDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
    }

    // If the month difference is negative, adjust the year difference accordingly
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    let duration = "";

    if (yearDiff > 0)
        duration += `${yearDiff} year` + (yearDiff > 1 ? "s" : ""); //  to do : add s if plural
    
    if (monthDiff > 0) {
        duration += (duration ? ", " : "") + `${monthDiff} month` + (monthDiff > 1 ? "s" : "");
    }

    if (dayDiff > 0) {
        duration += (duration ? ", " : "") + `${dayDiff} day` + (dayDiff > 1 ? "s" : "");
    }

    return duration;
}