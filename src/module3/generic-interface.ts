interface IComputer<T, U = null> {
    name: String,
    warrenty: T,
    buyPlace?: U
}

const computer1: IComputer<boolean, string> = {
    name: 'Intel',
    warrenty: true,
    buyPlace: 'Dhaka'
}

const computer2: IComputer<number> = {
    name: 'Ryzen',
    warrenty: 2
}

interface IComputerInterface {
    version: string,
    release: number
}

const computer3: IComputer<IComputerInterface> = {
    name: 'Intel',
    warrenty: {
        version: 'Seven',
        release: 22
    }
}

interface IComputer4 {
    version: string,
    release: number 
}

interface IBuyplace {
    location: string,
    time: number 
}

const computer4: IComputer<IComputer4, IBuyplace> = {
    name: 'Intel',
    warrenty: {
        version: 'Seven',
        release: 22
    },
    buyPlace: {
        location: 'dhaka',
        time: 7
    }
}