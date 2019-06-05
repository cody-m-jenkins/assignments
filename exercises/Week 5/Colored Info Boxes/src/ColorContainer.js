import React from 'react'
import Color from './Color'

const ColorContainer = () => {

    const colorInfo = [
        {
            title: 'Red',
            backgroundColor: 'red',
            subtitle: 'A lovely red hue.',
            information: 'You can tell it\'s red by the way it is.'
        },
        {
            title: 'Orange',
            backgroundColor: 'orange',
            subtitle: 'A lovely orange hue.',
            information: 'You can tell it\'s orange by the way it is.'
        },
        {
            title: 'Yellow',
            backgroundColor: 'yellow',
            subtitle: 'A lovely yellow hue.',
            information: 'You can tell it\'s yellow by the way it is.'
        },
        {
            title: 'Green',
            backgroundColor: 'green',
            subtitle: 'A lovely green hue.',
            information: 'You can tell it\'s green by the way it is.'
        },

    ]
    const mappedColorInfo = colorInfo.map((color)=> {
    return <Color color={color} />
    })

    return (
        <div>
            {mappedColorInfo}
        </div>
    )

}

export default ColorContainer