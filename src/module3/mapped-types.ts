type AreaNumber = {
    height: number,
    width: number
}

type AreaNumberForGeneric = {
    height: number,
    width: number
}

//map
type AreaDynamic = {
    [key in keyof AreaNumber]: AreaNumber[key]
}

//map with generic
type AreaDynamicGeneric<T> = {
    [key in keyof T]: T[key]
}

type AreaString = {
    height: string,
    width: string
}

const Area: AreaNumber = {
    height: 5,
    width: 10
}

//change
Area.height=50;

type AreaReadOnly = {
    readonly height: string,
    readonly width: string
}
type A1 = AreaString["height"] //look up types
type B1 = keyof AreaNumber; // 'width' | 'height'