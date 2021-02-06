export const currencyFormating = (props) => {
    return new Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(props.price) || ''
} 