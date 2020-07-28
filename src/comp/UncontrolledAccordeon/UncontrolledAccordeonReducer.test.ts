import {reducer, StateType, TOGGLE_CONSTANT} from './UncontrolledAccordeonReducer';


test('collapsed should be true',()=>{

    const startState:StateType = {collapsed:false};
    const endState = reducer(startState,{type:TOGGLE_CONSTANT});
    expect(endState.collapsed).toBeDefined();
    expect(endState.collapsed).toBe(true);


})

test('collapsed should be false',()=>{

    const startState:StateType = {collapsed:true};
    const endState = reducer(startState,{type:TOGGLE_CONSTANT});
    expect(endState.collapsed).toBeDefined();
    expect(endState.collapsed).toBe(false);


})

test(' should throw Error',()=>{

    const startState:StateType = {collapsed:true};


    expect(()=>{reducer(startState,{type:"Mamba"});})
        .toThrowError();


})