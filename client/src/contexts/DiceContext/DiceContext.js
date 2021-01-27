import React from 'react'
import {DiceBag} from "../../modules/DiceBag/DiceBag";

const DiceContext = React.createContext(undefined);

export const DiceProvider = DiceContext.Provider
export const DiceConsumer = DiceContext.Consumer

export default DiceContext
