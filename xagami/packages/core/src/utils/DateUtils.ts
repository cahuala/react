export default class DateUtils{
    static toDayWithOh(){
        const toDay = new Date();
        toDay.setHours(0, 0, 0, 0);
        return toDay;
    }
    static nextDays(qtde:number, includeToDay:boolean = true){
        const days = [];
        const today = DateUtils.toDayWithOh();
        
        if(includeToDay) {
            days.push(today);
        }
        for(let i = 1; days.length < qtde; i++){
            const day = new Date(today);
            day.setDate(today.getDate() + i);
            days.push(day);
        }
        return days;
    }
    static timeAplicated(date: Date, time: string){
        const newDate = new Date(date)
        const [hour, minute] = time.split(':').map(Number)
        newDate.setHours(hour,minute,0,0)
        return newDate
    }
}
