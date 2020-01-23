const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//const microphone = document.querySelectorAll('.fav');

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

//microphone.onclick() = function(e){
//    recognition.start();
//}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);0000
    document.getElementById('result').textContent = text;
    read(text);
}
//var name = prompt("Enter your name");
//var age = prompt("Enter your age");
//var gen = prompt("Enter your gender");
//function suggestion(name,age,gen) {
//    var result = "Hello" + " " + name +" your age is" + age + "and gender is" + gen;
//    console.log(result);
//   
//    
//
//}
//suggestion(name,age,gen)
function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes('introduce yourself'))
    speech.text = 'hello i am voice assistant programe to manage all the specific function that are required by the technologist!';
    else if(text.includes('love me'))
    speech.text = 'Of course,you are most lovable person Mister Stark !';
    
    else if(text.includes('medical imaging'))
    speech.text = 'Medical imaging refers to techniques and processes used to create images of various parts of the human!';
    
    else if(text.includes('use of'))
    speech.text = 'Medical imaging seeks to reveal internal structures hidden by the skin and bones, as well as to diagnose and treat disease. Medical imaging also establishes a database of normal anatomy and physiology to make it possible to identify abnormalities';
    
     else if(text.includes('machines which used Medical imaging'))
    speech.text = 'Fluoroscopy, including upper GI and barium enema';


else if(text.includes('MRI'))
    speech.text = 'An MRI scan uses a large magnet, radio waves, and a computer to create a detailed, cross-sectional image of internal organs and structures.The scanner itself typically resembles a large tube with a table in the middle, allowing the patient to slide in.An MRI scan differs from CT scans and X-rays, as it does not use potentially harmful ionizing radiation.';

else if(text.includes('uses of MRI'))
    speech.text = 'anomalies of the brain and spinal cordtumors, cysts, and other anomalies in various parts of the body breast cancer screening for women who face a high risk of breast cancerinjuries or abnormalities of the joints, such as the back and knee certain types of heart problems';

else if(text.includes('What is CT?'))
    speech.text = 'A CT scan or computed tomography scan makes use of computer-processed combinations of many X-ray measurements taken from different angles to produce cross-sectional images of specific areas of a scanned object, allowing the user to see inside the object without cutting';

else if(text.includes('Is the radiation from CT harmful?'))
    speech.text = 'Some people may be concer````````````````````````````````````````````````````````````````````````````````````````````````````````````ned about the amount of radiation they receive during CT. CT imaging involves the use of x-rays, which are a form of ionizing radiation. Exposure to ionizing radiation is known to increase the risk of cancer. Standard x-ray procedures, such as routine chest x-rays and mammography, use relatively low levels of ionizing radiation. The radiation exposure from CT is higher than that from standard x-ray procedures, but the increase in cancer risk from one CT scan is still small';

     else if(text.includes('symptoms of cough'))
    speech.text = 'In cough people feel very tired,nausea,not able to work properly,Shortness of breath, decrease in exercise tolerance easy fatigability Wheezing or a whistling breathing,Runny nose,Sore throat,Heartburn.';
    
    
else if(text.includes('What is being done to reduce the level of radiation exposure from CT?'))
    speech.text = 'In response to concerns about the increased risk of cancer associated with CT and other imaging procedures that use ionizing radiation, several organizations and government agencies have developed guidelines and recommendations regarding the appropriate use of these procedures.';

else if(text.includes('What is MRA'))
    speech.text = 'MR angiography (MRA) uses a powerful magnetic field, radio waves and a computer to evaluate blood vessels and help identify abnormalities. This exam does not use radiation and may require an injection of contrast material.';
   else if(text.includes('internet of things'))
    speech.text = 'The Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.';  
    
     else if(text.includes('node MCU'))
    speech.text = 'NodeMCU is an open source IoT platform. It includes firmware which runs on the ESP8266 Wi-Fi SoC from Espressif Systems, and hardware which is based on the ESP-12 module. The term "NodeMCU" by default refers to the firmware rather than the development kits. The firmware uses the Lua scripting language';
    

      else if(text.includes('IOT devices'))
    speech.text = 'IoT devices include wireless sensors, software, actuators, and computer devices. They are attached to a particular object that operates through the internet, enabling the transfer of data among objects or people automatically without human intervention.';
    
    
     else if(text.includes('fever'))
    speech.text = 'In the case of a high fever, or a low fever that  causing discomfort you can take over-the-counter medication, such as acetaminophen Tylenol,or ibuprofen ,Advil, Motrin IB ';

window.speechSynthesis.speak(speech);
    
}