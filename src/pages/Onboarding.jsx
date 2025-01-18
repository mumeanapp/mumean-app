import { useState } from "react"
import child_00 from "../assets/child/child_00.png";
import child_01 from "../assets/child/child_01.png";
import child_02 from "../assets/child/child_02.png";
import child_03 from "../assets/child/child_03.png";
import family from "../assets/icons/family.png"
import instagram from "../assets/icons/instagram.png"
import google from "../assets/icons/google.png"
import linkedin from "../assets/icons/linkedin.png"
import more from "../assets/icons/more.png"

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [howToKnow, setHowToKnow] = useState("");
  const [whatToDo, setWhatToDo] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const steps = [0, 1, 2, 3, 4, 5];

  const nextStep = () => {
    if(currentStep < steps.length-1)
      setCurrentStep(prev => prev + 1); 
  }

  const renderStep = (step) => {
    switch(step) {
      case 0:
        return(
          <div className="flex flex-col h-[95%]">
            <div className="flex flex-col items-center h-1/2 justify-end">
              <img src={child_01}/>
              <p className="text-8xl text-primary-600">mumean</p>
              <p className="text-7xl text-grey-300">Doğru yolu öğren</p>
            </div>
            <div className="flex flex-col gap-3 items-center h-1/2 justify-end">
              <a
                className="bg-primary-600 rounded-3xl px-3 py-2 border-b-4 border-primary-700 text-base-yellow text-7xl w-[90%] text-center"
                onClick={nextStep}
              >
                HADİ BAŞLAYALIM
              </a>
              <a
                className="bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-primary-700 text-primary-600 text-7xl w-[90%] text-center" 
                onClick={() => {}}
              >
                ZATEN HESABIM VAR
              </a>
            </div>
          </div>
        );
      case 1:
        return(
          <div className="flex flex-col h-[95%] pt-32">
            <div className="flex flex-col items-center h-1/2 justify-end gap-5">
              <p className="text-5xl text-grey-300">Saalaam'un Aleykum! Ben Ömer.</p>
              <img src={child_02}/>
            </div>
            <div className="flex flex-col gap-3 items-center h-1/2 justify-end">
              <a
                className="bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-primary-700 text-primary-600 text-7xl w-[90%] text-center" 
                onClick={nextStep}
              >
                DEVAM ET
              </a>
            </div>
          </div>
        );
      case 2:
        return(
          <div className="flex flex-col h-[95%] pt-32">
            <div className="flex flex-col items-center h-1/2 justify-end gap-5">
              <p className="text-5xl text-grey-300">Seni tanımak için bazı sorular soracağım.</p>
              <img src={child_03}/>
            </div>
            <div className="flex flex-col gap-3 items-center h-1/2 justify-end">
              <a
                className="bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-primary-700 text-primary-600 text-7xl w-[90%] text-center" 
                onClick={nextStep}
              >
                DEVAM ET
              </a>
            </div>
          </div>
        );
      case 3:
        return(
          <div className="flex flex-col h-[95%] justify-between">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-5">
                <img src={child_00}/>
                <p className="text-5xl text-grey-300">mumean uygulamasından nasıl haberdar oldun?</p>
              </div>
              <div className="flex flex-col gap-3 items-center w-full">
                <div className={`flex bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-base-black text-base-black text-3xl w-[90%] gap-2 items-center
                  ${howToKnow === "Arkadaşlar/Aile" ? "bg-green-400 border-green-700" : ""}`}>
                  <img src={family} className="w-8 h-8"/>
                  <p onClick={() => setHowToKnow("Arkadaşlar/Aile")}>
                    Arkadaşlar/Aile
                  </p>
                </div>
                <div className={`flex bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-base-black text-base-black text-3xl w-[90%] gap-2 items-center
                  ${howToKnow === "Instagram" ? "bg-green-400 border-green-700" : ""}`}>
                  <img src={instagram} className="w-8 h-8"/>
                  <p onClick={() => setHowToKnow("Instagram")}>
                    Instagram
                  </p>
                </div>
                <div className={`flex bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-base-black text-base-black text-3xl w-[90%] gap-2 items-center
                  ${howToKnow === "Google Aramalar" ? "bg-green-400 border-green-700" : ""}`}>
                  <img src={google} className="w-8 h-8"/>
                  <p onClick={() => setHowToKnow("Google Aramalar")}>
                    Google Aramalar
                  </p>
                </div>
                <div className={`flex bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-base-black text-base-black text-3xl w-[90%] gap-2 items-center
                  ${howToKnow === "Linkedin" ? "bg-green-400 border-green-700" : ""}`}>
                  <img src={linkedin} className="w-8 h-8"/>
                  <p onClick={() => setHowToKnow("Linkedin")}>
                    Linkedin
                  </p>
                </div>
                <div className={`flex bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-base-black text-base-black text-3xl w-[90%] gap-2 items-center
                  ${howToKnow === "Diğer" ? "bg-green-400 border-green-700" : ""}`}>
                  <img src={more} className="w-8 h-8"/>
                  <p onClick={() => setHowToKnow("Diğer")}>
                    Diğer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <button
                className="bg-base-yellow rounded-3xl px-3 py-2 border-b-4 border-primary-700 text-primary-600 text-7xl w-[90%] text-center" 
                onClick={nextStep}
                disabled={howToKnow === ""}
              >
                DEVAM ET
              </button>
            </div>
          </div>
        );
      default:
        return <p>Beklenmeyen bir hata oluştu.</p>
    }
  }

  return(
    renderStep(currentStep)
  );
}