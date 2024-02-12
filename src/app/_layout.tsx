import { SafeAreaView } from "react-native"
import { Slot } from "expo-router";
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";

export default function Layout() {
    const [ loadedFonts ] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    if (!loadedFonts) {
        return <Loading />
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-900">
            <Slot />
        </SafeAreaView>
    )
}