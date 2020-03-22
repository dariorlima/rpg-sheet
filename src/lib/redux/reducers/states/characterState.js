const characterState = {
    proficiencyBonus: 2,
    class: '',
    race: '',
    level: '',
    background: '',
    alignment: '',
    player_name: '',
    experience: 0,
    inspiration: '',
    initiative: 0,
    personalityTraits: '',
    featuresAndTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    hitDice: '',
    armorClass: 0,
    totalPv: 0,
    currentPv: 0,
    saving_throws: [
        {   
            key: 'strenght',
            name: 'Força',
            value: 0
        },
        {
            key: 'dextery',
            name: 'Destreza',
            value: 0
        },
        {
            key: 'constituition',
            name: 'Constituição',
            value: 0
        },
        {
            key: 'intelligence',
            name: 'Inteligência',
            value: 0
        },
        {
            key: 'wisdom',
            name: 'Sabedoria',
            value: 0
        },
        {
            key: 'charisma',
            name: 'Charisma',
            value: 0
        },
    ],  
    attributes: {
        strenght: {
            label: 'For.',
            modifier: 0,
            value: 8,
            skills: [
                {
                    label: 'Atletismo',
                    value: 0,
                }
            ]
        },
        dextery: {
            label: 'Des.',
            modifier: 0,
            value: 17,
            skills: [
                {
                    label: 'Acrobacia',
                    value: 0
                },
                {
                    label: 'Furtividade',
                    value: 0
                },
                {
                    label: 'Prestidigitação',
                    value: 0
                },
            ]
        },
        constituition: {
            label: 'Const.',
            modifier: 0,
            value: 10,
            skills: [

            ]
        },
        intelligence: {
            label: 'Int.',
            modifier: 0,
            value: 13,
            skills: [
                {
                    label: 'Arcanismo',
                    value: 0
                },
                {
                    label: 'Historia',
                    value: 0
                },
                {
                    label: 'Investigação',
                    value: 0
                },
                {
                    label: 'Natureza',
                    value: 0
                },
                {
                    label: 'Religião',
                    value: 0
                },
            ]
        },
        wisdom: {
            label: 'Sab.',
            modifier: 0,
            value: 15,
            skills: [
                {
                    label: 'Intuição',
                    value: 0
                },
                {
                    label: 'Lidar com animais',
                    value: 0
                },
                {
                    label: 'Medicina',
                    value: 0
                },
                {
                    label: 'Percepção',
                    value: 0
                },
                {
                    label: 'Sobrevivencia',
                    value: 0
                },
            ]
        },
        charisma: {
            label: 'Car',
            modifier: 0,
            value: 12,
            skills: [
                {
                    label: 'Atuação',
                    value: 0
                },
                {
                    label: 'Intimidação',
                    value: 0
                },
                {
                    label: 'Persuasão',
                    value: 0
                },
            ]
        }
    }
};

export default characterState;