const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if(data) {
            resolve(data)
        } else {
            reject("Failed to fetched data")
        }
    })
}

const getPromise = async(): Promise<string> => {
    const result = await makePromise();
    return result
}

// for object

interface ObjDataTypeInterface {
    data: string
}
const makePromiseObj = (): Promise<ObjDataTypeInterface> => {
    return new Promise<ObjDataTypeInterface>((resolve, reject) => {
        const data: ObjDataTypeInterface = {data: "Data is fetched"};
        if(data) {
            resolve(data)
        } else {
            reject("Failed to fetched data")
        }
    })
}

const getPromiseObj = async(): Promise<ObjDataTypeInterface> => {
    const result = await makePromiseObj();
    return result
}

//api call

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodo = async(): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return await response.json();
}

const getTodoData = async(): Promise<void> => {
    const result = await getTodo();
    console.log('result is', result);
}

getTodoData();