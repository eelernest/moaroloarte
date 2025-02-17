import './styles/item-list.css'

export default function Items({ item }) {
    return (
        <li className='item-list'>{item}</li>
    )
}