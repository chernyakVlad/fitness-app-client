import * as types from "./types"
import {planService} from "../../../service/plan-service";
import {createNotification} from "../../../helpers/helpers";


function setUserPlan(id) {
    return async dispatch => {
        dispatch(request());
        try {
            const response = await planService.getById(id);
            dispatch(success(response.data));
        } catch (e) {
            dispatch(failure());
        }
    };

    function request() {
        return {type: types.SET_PLAN_ACTIVITIES_REQUEST}
    }

    function success(plan) {
        return {type: types.SET_PLAN_ACTIVITIES_SUCCESS, plan}
    }

    function failure() {
        return {type: types.SET_PLAN_ACTIVITIES_FAILURE}
    }
}


function updatePlan(id, activity) {
    return dispatch => {
        dispatch(request());
        planService.updatePlan(id, activity)
            .then(
                response => {
                    createNotification('success', 'Activity has been updated');
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure());
                }
            );
    };

    function request() {
        return {type: types.UPDATE_PLAN_REQUEST}
    }

    function success(activity) {
        return {type: types.UPDATE_PLAN_SUCCESS, activity}
    }

    function failure() {
        return {type: types.UPDATE_PLAN_FAILURE}
    }
}

function getPlan(id) {
    return dispatch => {
        dispatch(request());
        planService.getPlan(id)
            .then(
                response => {
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };

    function request() {
        return {type: types.GET_TODAY_ACTIVITIES_REQUEST}
    }

    function success(activities) {
        return {type: types.GET_TODAY_ACTIVITIES_SUCCESS, activities}
    }

    function failure() {
        return {type: types.GET_TODAY_ACTIVITIES_FAILURE}
    }
}



export const planActions = {
    setUserPlan,
    updatePlan,
    getPlan,

};