import { fromJS } from 'immutable'

export const getLabelByValue = (masterData, values, valueSplit, labelConnect) => {
    let labels = fromJS([])

    if (values) {
        values.split(valueSplit).forEach(v => {
            let targetObj = masterData.find(obj => obj.get('value').toString() === v.toString())

            if (targetObj) {
                labels = labels.push(targetObj.get('label'))
            }
        })
    }

    return labels.join(labelConnect)
}

export const changeStringToBoolean = (value, physicalColumnIndex) => {
    if (physicalColumnIndex < 1) {
        if (value === 'true' || value === true) {
            return true
        }
        else if (value === 'false' || value === false) {
            return false
        }
        else if (value === '') {
            return null
        }
        else {
            return value
        }
    }
    else {
        return value
    }
}

export const getInsertIndexDesc = (array, target) => {
    let returnIndex = array.length

    array.forEach((element, index) => {
        if (target > element) {
            returnIndex = index
        }
    })

    return returnIndex
}
