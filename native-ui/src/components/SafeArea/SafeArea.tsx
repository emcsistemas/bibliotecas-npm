import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

const SafeArea = (props: SafeAreaViewProps) => {
  return <SafeAreaView {...props}>{props.children}</SafeAreaView>
}

export default SafeArea