import { useState } from 'react';
import { View,Text,Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert} from 'react-native';
import Greet  from './components/Greet';
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  const [isModalVisible, setModalVisible] = useState(false);
  const [isStatusBarVisible, setStatusBarVisible] = useState(true);
  const toggleStatusBar = () => {
    setStatusBarVisible(!isStatusBarVisible);
  };
  return <View style={{flex:1, backgroundColor:'skyblue', padding:60}}>
    <Button title = "statusBar" onPress={toggleStatusBar}></Button>
    <StatusBar backgroundColor={'green'} barStyle= "dark-content" hidden = {isStatusBarVisible}/>
{/* <ActivityIndicator />
<ActivityIndicator size = "large" /> */}
<ActivityIndicator size= "large" color = "purple" animating ={isStatusBarVisible}/>
{/* 
backgroundColor - will apply only in android
default - status bar menu white in android and black in IOS
dark-content - black in android and IOS
white-content - white in android and IOS 
hidden - will hide the status bar*/}

{/* <Text>Hello World</Text> */}

{/* Text - UITextView for IOS , TextView for android , P tag for web */}

{/* <Image source={logoImg} style={{width:300, height:300}}></Image>
<Image source={{uri :"https://picsum.photos/200"}}
style = {{width:300, height:300}}></Image> */}

{/* <ImageBackground source={logoImg} style={{flex:1}}>
  <Text>Image View</Text>
</ImageBackground> */}
{/* <ScrollView>
<Image source={logoImg} style={{width:300, height:300}}></Image>
<Text>
My professional experience includes serving as an Associate-Projects at Cognizant Technology Solutions, where I played a pivotal role in developing microservices using Eureka server and Zuul. I led the API lifecycle development, ensuring excellence in software development, and integrated external systems. Additionally, I have experience in tracking, planning, estimating, and backlog grooming. The tools and technologies I utilized include Java 8, Spring Boot, Microservices, JUnit, Mockito, and more.
Before that, as an IT Analyst at Tata Consultancy Services, I demonstrated leadership in developing versatile API services, optimizing performance with Redis Cache integration, and emphasizing software development excellence within an Agile framework. My responsibilities encompassed defining scope, planning, estimating, and tracking project progress. I utilized a diverse set of tools and technologies, including Java 8, Spring Boot, Kafka, J2EE, EJB, SQL, and more.

</Text>
<Image source={logoImg} style={{width:300, height:300}}></Image>
</ScrollView> */}

{/* 
<Button title='Press' onPress={()=> console.log("Button pressed")} color={'red'} ></Button>
<Pressable onPress={()=>console.log("Image Pressed")}>
<Image source={logoImg} style={{width:300, height:300}}></Image>
</Pressable>
<Pressable onPress={()=>console.log("Text Pressed")}>
<Text>
My professional experience includes serving as an Associate-Projects at Cognizant Technology Solutions, where I played a pivotal role in developing microservices using Eureka server and Zuul. I led the API lifecycle development, ensuring excellence in software development, and integrated external systems. Additionally, I have experience in tracking, planning, estimating, and backlog grooming. The tools and technologies I utilized include Java 8, Spring Boot, Microservices, JUnit, Mockito, and more.
Before that, as an IT Analyst at Tata Consultancy Services, I demonstrated leadership in developing versatile API services, optimizing performance with Redis Cache integration, and emphasizing software development excellence within an Agile framework. My responsibilities encompassed defining scope, planning, estimating, and tracking project progress. I utilized a diverse set of tools and technologies, including Java 8, Spring Boot, Kafka, J2EE, EJB, SQL, and more.
</Text>
</Pressable> */}

<Button 
    title='Press' 
    onPress={()=> setModalVisible(true)} 
    color='red' >
</Button>

<Modal visible = {isModalVisible}
// onRequestClose= {()=>setModalVisible(false)}
// animationType='slide'
// presentationStyle='pageSheet'
// This presentationStyle affects only in IOS - pagesheet - wider , formsheet - narrow
>
  <View style={{flex:1, backgroundColor:'plum', padding:60}}>
  <Text>Modal displayed</Text>
  <Button 
      title ='close' 
      onPress={()=>setModalVisible(false)} 
      color ='black'>
  </Button>
  </View>
</Modal>

<Button title = "Alert" onPress={()=>Alert.alert("Invalid Data!")}></Button>
<Button title = "Alert 1" onPress={()=>Alert.alert("Invalid Data!", "DOB Incorrect!")}></Button>
<Button title = "Alert 2" onPress={()=>Alert.alert("Invalid Data!", "DOB Incorrect!",
[
  {text: "cancel",
  onPress: ()=>console.log("Cancel pressed")},
  {text: "OK",
onPress: ()=>console.log("Ok Pressed")}
]
)
}>

</Button>

<Greet name = "Vinothini"></Greet>
<Greet name = "Balaji"></Greet>
  </View>;

}
