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
    ideals: '',
    bonds: '',
    flaws: '',
    hitDice: '',
    armorClass: 0,
    totalPv: 0,
    currentPv: 0,
    saving_throws: {
        strenght: 0,
        dextery: 0,
        constituition: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0

    },  
    attributes: {
        strenght: {
            modifier: 0,
            value: 0,
            skills: [
                {
                    label: 'Atletismo',
                    value: 0,
                }
            ]
        },
        dextery: {
            modifier: 0,
            value: 0,
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
            modifier: 0,
            value: 0,
            skills: [

            ]
        },
        intelligence: {
            modifier: 0,
            value: 0,
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
            modifier: 0,
            value: 0,
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
            modifier: 0,
            value: 0,
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