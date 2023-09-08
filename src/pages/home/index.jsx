import { useEffect, useState } from "react";
import {
  Container,
  Swapper,
  Header,
  DivHello,
  DivGoal,
  DivDrink,
  Drink,
  DivGoalDiary,
  DailyGoal,
  Daily,
  QuantifyTimer,
  Quantify,
  DivImage,
  DivTimer,
  DivHour,
  Second,
  DivMin,
  Min,
  Button,
} from "./styles";

import { IoCloseOutline } from "react-icons/io5";
import { RxChevronRight } from "react-icons/rx";

import Lottie from "lottie-react";
import animation from "../../assets/animation.json";

import mini_emoji from "../../assets/mini_emoji.svg";
import emoji from "../../assets/emoji.png";

function Home(props) {
  const [profileData, setProfileData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  const [dailyGoal, setDailyGoal] = useState(2500);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(200);

  const [percentage, setPercentage] = useState(0);

  const startTimer = () => {
    setMinutes(1);
    setSeconds(0);
    setIsRunning(true);
  };

  const increaseAmount = () => {
    const newAmount = currentAmount + amountToAdd;
    const newPercentage = (newAmount / dailyGoal) * 100;

    if (newPercentage >= 100) {
      showNotification("Parabéns! Meta diária batida com sucesso!");
    }
    setCurrentAmount(newAmount);
    setPercentage(newPercentage);
    closeModal();
  };

  const showNotification = (message) => {
    alert(message);
  };

  useEffect(() => {
    if (dailyGoal < amountToAdd) {
      setDailyGoal(amountToAdd);
    }
    const newPercentage = (currentAmount / dailyGoal) * 100;
    setPercentage(newPercentage);
  }, [dailyGoal, amountToAdd, currentAmount]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          setIsRunning(false);
          openModal();
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds, minutes]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/maykbrito`
        );
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
      }
    };
    fetchGitHubProfile();
  }, [props.username]);

  return (
    <Container>
      <Swapper
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header>
          {profileData && (
            <DivImage>
              <img
                src={profileData.avatar_url}
                alt="Imagem de perfil do GitHub"
              />
            </DivImage>
          )}
          <DivHello>
            <span>Boa tarde,</span>
            <div>
              <h1>Pablo</h1>
              <Lottie
                animationData={animation}
                style={{
                  width: "30px",
                  height: "30px",
                  transform: "rotate(-30deg)",
                }}
              />
            </div>
          </DivHello>
        </Header>

        <DivGoal>
          <DivDrink>
            <span>{percentage.toFixed(2)}%</span>

            <Drink>
              <img className="vibration" src={emoji} alt="" />
              <div>
                <h1>Beber água</h1>
                <span>Meta: {dailyGoal}L</span>
              </div>
            </Drink>
          </DivDrink>

          <DivGoalDiary>
            <DailyGoal>
              <Daily>
                <span>Meta diária</span>
                <p>{dailyGoal}ml</p>
              </Daily>
              <input
                className="range-slider"
                type="range"
                min="0"
                max="3000"
                step={5}
                value={dailyGoal}
                onChange={(e) => {
                  setDailyGoal(Number(e.target.value));
                }}
              />
            </DailyGoal>

            <QuantifyTimer>
              <Quantify>
                <span>Quantidade por Timer</span>
                <p>{amountToAdd}ml</p>
              </Quantify>
              <input
                type="range"
                min="0"
                max="300"
                step={5}
                value={amountToAdd}
                onChange={(e) => setAmountToAdd(parseInt(e.target.value))}
              />
            </QuantifyTimer>

            <DivTimer>
              <DivHour>
                <Min>{minutes.toString().padStart(2, "0")}</Min>
                <span>m</span>
              </DivHour>
              <p>:</p>
              <DivMin>
                <Second>{seconds.toString().padStart(2, "0")}</Second>
                <span>s</span>
              </DivMin>
            </DivTimer>

            <Button onClick={startTimer}>
              Começar <RxChevronRight size={24} color="#0F0E13" />
            </Button>
          </DivGoalDiary>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content" onClick={increaseAmount}>
                <img src={mini_emoji} alt="" />
                <h1>Lembrete para beber água</h1>
                <button onClick={closeModal}>
                  <IoCloseOutline size={24} color="#fff" />
                </button>
              </div>
            </div>
          )}
        </DivGoal>
      </Swapper>
    </Container>
  );
}

export default Home;
