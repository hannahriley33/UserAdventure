export const getUserName = (formData) => {
    const user = {
        name: formData.get('userName'),
        icon: formData.get('userPlayer'),
        rapport: 0,
        technical: 0,
        completed: {},
       
    }
    return user;
};

