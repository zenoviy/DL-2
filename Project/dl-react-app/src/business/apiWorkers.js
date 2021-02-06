export const getData = (props) => {
    return fetch(props.url)
}

export const postData  = props => {
    return fetch(props.url, {
        method: "post",
        headers: {"Content-Type" : "application/json"},
        body: props.body ? props.body : null
    })
}

export const deleteUser = props => {
    return fetch(props.url, {
        method: "DELETE",
        headers: props.headers
    })
}



export const itemFinder = (props) => {
    return props.originData.find(data => parseInt(data.id) ===  parseInt(props.id))
}