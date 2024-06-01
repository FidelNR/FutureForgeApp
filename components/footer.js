import { SafeAreaView, StyleSheet, View,Image, Text } from "react-native";
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import x from '../image/x.png';

export default function footer() {

    return(
        <>
            <SafeAreaView>
                <View style={styles.footer}>
                    <Image style={styles.socialIcon} source={facebook} />
                    <Image style={styles.socialIcon} source={x} />
                    <Image style={styles.socialIcon} source={instagram} />
                    <Text style={styles.copyright}>© 2024 EduVoc</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
      },
      socialIcon: {
        marginHorizontal: 8,
      },
      copyright: {
        fontSize: 12,
        color: '#333',
      },
});
