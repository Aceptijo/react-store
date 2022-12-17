export const calculateTotalPrice = (total, price, operation) => {
    if (operation === 'increment') {
        return total + Number(price);
    }
    return total - Number(price);
};

export const findItemById = (state, id) => {
    return state.items.find((item) => item.id === id);
};

export const getItemIndexById = (state, id) => {
    return state.items.findIndex((item) => item.id === id);
};
