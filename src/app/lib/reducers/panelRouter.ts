// reducers/panelReducer.ts

interface PanelState {
    showPanel: boolean;
  }
  
  const initialState: PanelState = {
    showPanel: true,
  };
  
  const panelReducer = (state = initialState, action: { type: string }): PanelState => {
    switch (action.type) {
      case 'TOGGLE_PANEL':
        return {
          ...state,
          showPanel: !state.showPanel,
        };
      default:
        return state;
    }
  };
  
  export default panelReducer;
  