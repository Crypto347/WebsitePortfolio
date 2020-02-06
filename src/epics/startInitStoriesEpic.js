/**
* Operators
*/

import { 
    of,
    interval,
    empty
} from 'rxjs';

import { 
    mergeMap,
    takeUntil
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

import {
    storiesArray
} from '../constants/storiesArray';

/**
* Epic
*/

export const startInitStoriesEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_STORIES),
        mergeMap((action) => {
            if(storiesArray.length >= action.index + 1){
                let storiesFilteredByMonth = storiesArray[action.index];
                return of(
                    Actions.addStoriesByMonth(storiesFilteredByMonth),
                )   
            }else{
                return empty()
            }
        })                
    )

export default startInitStoriesEpic;