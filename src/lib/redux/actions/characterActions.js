import * as types from '@redux/constants/character';

export const loadCharacter = () => {

    return (dispatch, getState) => {

        const { character } = getState();

        dispatch({
            type: types.LOAD_CHARACTERS,
            payload: {
                ...character,
                attributes: updateModifiers(character)
            }
        })
    }
}

export const increaseAttr = (attribute) => {
    return (dispatch, getState) => {
        const { character: { attributes } } = getState();
        const value = attributes[attribute.key]['value'];

        attributes[attribute.key]['value'] = value < 20 ? value + 1 : value;

        dispatch({
            type: types.UDPATE_CHARACTER,
            payload: {
                attributes
            }
        })
    }
};

export const decreaseAttr = (attribute) => {
    return (dispatch, getState) => {
        const { character: { attributes } } = getState();
        const value = attributes[attribute.key]['value'];

        attributes[attribute.key]['value'] = value > 0 ? value - 1 : value;

        dispatch({
            type: types.UDPATE_CHARACTER,
            payload: {
                attributes
            }
        })
    }
};

export const updateSkills = (attribute, skills) => {
    return (dispatch, getState) => {
        const { character: { attributes } } = getState();

        attributes[attribute.key]['skills'] = skills;

        dispatch({
            type: types.UDPATE_CHARACTER,
            payload: {
                attributes
            }
        })
    }
};

export const recalcModifiers = () => {
    return (dispatch, getState) => {
        const { character } = getState();

        dispatch({
            type: types.LOAD_CHARACTERS,
            payload: {
                ...character,
                attributes: updateModifiers(character)
            }
        })
    }
}

const updateModifiers = (character) => {
    const _attrs = {};
    Object.keys(character.attributes).map(attr => {
        const _modifier = (character.attributes[attr].value - 10) / 2;
        const modifier = Math.floor(_modifier);
        const _up = {
            ...character.attributes[attr],
            modifier
        };
        _attrs[attr] = _up;
    });

    return _attrs;
}

