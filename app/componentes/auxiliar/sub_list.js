import './styles/item-list.css'

import Items from './item_list'

export default function Sub_list({item1,item2,item3,item4,item5}) {
    return (
        <ul className='sub-list-container'>
            {item1}
            {item2}
            {item3}
            {item4}
            {item5}
        </ul>

    )
}