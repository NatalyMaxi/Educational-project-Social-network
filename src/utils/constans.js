export const updateObjectInArray = (items, itemsId, objPropName, newObjProps) => {
   return items.map((user) => {
      if (user[objPropName] === itemsId) {
         return { ...user, ...newObjProps }
      }
      return user;
   })
}

// state.users.map((user) => {
//    if (user.id === action.userId) {
//       return { ...user, followed: true }
//    }
//    return user;
// })  // сделаем универсальную функцию
