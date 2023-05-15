// a type is dependent on another type

type a1 = number;
type a = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;

//nested conditional chaining
type d = a1 extends null ? null : a extends number ? number : a3 extends null ? null : never;


type Sheikh = {
    wife1: string,
    wife2: string
}

type A = keyof Sheikh; // 'wife1' | 'wife2' 
                        // 'wife1' extends 'wife1' | 'wife2'
type CheckProperty<T, U> = U extends keyof Sheikh ? true : false;

type CheckWife2 = CheckProperty<Sheikh, 'wife1'>

//another example of removing friends
type Friends = 'Rafiur' | "Rahman" | "Protik"

type RemoveFriends<T, K> = T extends K ? never : T

type CurrentFriends = RemoveFriends<Friends, 'Rafiur'>