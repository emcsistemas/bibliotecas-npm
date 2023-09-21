import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { styles } from "../../styles/styles";

const SafeArea = (props: SafeAreaViewProps) => {
  const safeAreaStyles = StyleSheet.compose(
    styles.safeArea,
    props.style,    
  )

  return <SafeAreaView style={safeAreaStyles}>{props.children}</SafeAreaView>
}

export default SafeArea