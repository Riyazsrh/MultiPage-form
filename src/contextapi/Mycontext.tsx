import React, { createContext, useState } from 'react'


export interface ParkingProps {
    category: any,
    category2: any,
    category3: any,
    category4: any,
    category5: any,
    category6: any,
    setCategory: any,
    setCategory2: any,
    setCategory3: any,
    setCategory4: any,
    setCategory5: any,
    setCategory6: any,
}

export const ParkingContext = createContext({} as ParkingProps)

function FirstPractice({ children }: any) {
    const [category, setCategory] = useState<any | null>();
    const [category2, setCategory2] = useState<any | null>();
    const [category3, setCategory3] = useState<any | null>();
    const [category4, setCategory4] = useState<any | null>();
    const [category5, setCategory5] = useState<any | null>();
    const [category6, setCategory6] = useState<any | null>();


    return (
        <ParkingContext.Provider value={{
            category,
            category2,
            category3,
            category4,
            category5,
            category6,
            setCategory,
            setCategory2,
            setCategory3,
            setCategory4,
            setCategory5,
            setCategory6,
        }}>
            {children}
        </ParkingContext.Provider>
    )
}

export default FirstPractice