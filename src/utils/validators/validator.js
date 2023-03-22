export const reqired = value => {
   if (value) {
      return undefined
   }
   return 'поле обязательное'
}

export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) {
      return `Максимально ${maxLength} символов`
   }
   return undefined
}