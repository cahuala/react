export default class ScheduleUtils {
    private static minutes;
    static timesOfDay(): {
        morning: string[];
        afternoon: string[];
        evening: string[];
    };
    static allSchedules(services: {
        qtdeSlots: number;
    }[]): string;
    static generateSchedules(hour: number[]): string[];
}
