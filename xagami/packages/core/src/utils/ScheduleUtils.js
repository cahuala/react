"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScheduleUtils {
    static minutes = [0, 15, 30, 45];
    static timesOfDay() {
        return {
            morning: this.generateSchedules([8, 9, 10, 11]),
            afternoon: this.generateSchedules([13, 14, 15, 16, 17]),
            evening: this.generateSchedules([18, 19, 20]),
        };
    }
    static allSchedules(services) {
        const duration = services.reduce((total, service) => total + service.qtdeSlots * 15, 0);
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
    }
    static generateSchedules(hour) {
        return hour.reduce((schedules, hour) => {
            const schedulesOfHour = this.minutes.map((minute) => {
                const timFormated = hour.toString().padStart(2, '0');
                const minuteFormated = minute.toString().padStart(2, '0');
                return `${timFormated}:${minuteFormated}`;
            });
            return [...schedules, ...schedulesOfHour];
        }, []);
    }
}
exports.default = ScheduleUtils;
//# sourceMappingURL=ScheduleUtils.js.map