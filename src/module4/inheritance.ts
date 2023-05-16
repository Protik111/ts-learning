
class Sports {
    name: string;
    time: number;
    location: string
    
    constructor(name: string, time: number, location: string) {
        this.name = name;
        this.time = time;
        this.location = location;
    }

    play(location: string): string {
        return `${this.name} is playing footbal`;
    }
}

class Football extends Sports{
    constructor(name: string, time: number, location: string) {
        super(name, time, location)
    }
}