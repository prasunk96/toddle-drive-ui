import lodash from 'lodash'
import deepdash from 'deepdash';

const _ = deepdash(lodash);

export const findDeepObjectAndReturn = (data, item) => {
    let obj = {};
    _.findValueDeep(data, (value, key, parent) => {
        if (key === 'name' && value === item) {
            obj = parent;
            return true
        }
    },
    { leavesOnly: false });
    return obj;
}

export const isObjectWithKeyAllreadyPresent = (data, item) => {
    return _.findValueDeep(data, (value, key) => {
        if (key === 'name' && value === item) return true
    },
    { leavesOnly: false });
}