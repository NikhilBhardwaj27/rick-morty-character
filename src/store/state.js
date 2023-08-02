export default {
    rickMorty:{
        info:{},
        result:[]   
    },
    filters:[
        {
            name:"Species",
            values:[
                'Human',
                'Mytholog',
                'Other Species...'
            ]
        },
        {
            name:"Gender",
            values:[
                'Male',
                'Female'
            ]
        },
        {
            name:"Origin",
            values:[
                'Unknown',
                'Post-Apocalyptic Earth',
                'Nupita 4',
                'Other things...'
            ]
        }
    ],
    filteredValues:[],
    errors:''
}