import React from 'react';

const DiceContext = React.createContext(undefined);

export const DiceProvider = DiceContext.Provider;
export const DiceConsumer = DiceContext.Consumer;

export default DiceContext;
