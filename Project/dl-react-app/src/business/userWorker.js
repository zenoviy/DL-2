export const convertFormToData = form => {
    let convertedData = {};

    for(let input of form) {
        if(input.name && input.value){
            convertedData[input.name] = input.value
        }
        if(input.name && !input.value) return false
    }
    console.log(convertedData, form)
    return convertedData
}