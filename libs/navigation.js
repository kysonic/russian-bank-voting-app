import {NavigationActions, StackActions} from "react-navigation";

export function navigateWithoutHistory(navigation, routeName) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
    });
    navigation.dispatch(resetAction);
}
