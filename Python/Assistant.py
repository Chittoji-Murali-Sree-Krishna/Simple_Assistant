import os
import time
import playsound
import speech_recognition as sr
from gtts import gTTS


def speak(text):
    tts = gTTS(text=text, lang="en")
    filename = "voice.mp3"
    tts.save(filename)
    playsound.playsound(filename)


def get_audio():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source)
        said = ""
        try:
            said = r.recognize_google(audio)
            print(said)
        except Exception as e:
            print("Exception: " + str(e))
    return said


text = get_audio()
if "hello" in text:
    speak("hello, hey there wassup")

if "what is my name" in text:
    speak("your name is warlord")

if "what is your name" in text:
    speak("my name is Luciale")

if "good morning" in text:
    speak("a very good morning to you")

if "good night" in text:
    speak("good night, scary dreams")
