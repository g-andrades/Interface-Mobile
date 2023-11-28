import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons'



export function UploadImage() {

    const camRef = useRef(null)
    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState();
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }, [])

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text> Acesso negado!</Text>
    }

    async function takePicture() {
        console.log( 'aqui' + camRef)

        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            console.log(data)
        }
    }

    return (
        <SafeAreaView>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View>
                    <TouchableOpacity style={styles.buttonUpload}
                        onPress={() => {
                            setType(
                                type === CameraType.back ? CameraType.front :
                                    CameraType.back
                            )
                        }}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
                        <FontAwesome name="camera" size={23} color="#FFF">

                        </FontAwesome>
                    </TouchableOpacity>
                    {capturedPhoto &&
                        <Modal animationType='slide'
                            transparent={false}
                            visible={open}>
                                <View style={styles.viewModal}>
                                <TouchableOpacity style={styles.buttonTouchable} onPress={() => setOpen(false)}>
                                    <FontAwesome name="window-close" size={50}/>
                                </TouchableOpacity>

                                <Image source={{uri: capturedPhoto}}/>
                               
                                </View>
                        </Modal>}
                </View>
            </Camera>
        </SafeAreaView>

    )

}